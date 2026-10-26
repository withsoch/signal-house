"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/Icons";
import { useAuditModal } from "@/context/AuditModalContext";
import { trackEvent } from "@/lib/analytics";
import { INTRO_VIDEO_STEPS } from "@/lib/content";
import type { IntroAction } from "@/lib/content";

const CAL_URL = "https://cal.com/consult-with-riz/linkedin-strategy-call";
const LETTERS = ["A", "B", "C", "D"];
const SPEEDS = [1, 1.5, 2];
// Step transition, matching VideoAsk: the screen dips to black, the next
// video fades in, then its answers appear a beat later.
const FADE_OUT_MS = 250;
const EASE = [0.22, 1, 0.36, 1] as const;
// Circles sit near the bottom-left corner.
const CIRCLE_POS = "bottom-6 left-10 sm:bottom-10 sm:left-16";

function formatTime(s: number) {
  const t = Math.max(0, Math.floor(s || 0));
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}

// Floating bottom-left intro video. Replaces the old VideoAsk embed.
export function IntroVideoWidget() {
  const { openModal } = useAuditModal();
  const reduceMotion = useReducedMotion();
  // bubble = default circle, player = expanded video, mini = tab docked to
  // the left edge (always expands back to the bubble).
  const [view, setView] = useState<"bubble" | "player" | "mini">("bubble");
  const open = view === "player";
  const [history, setHistory] = useState<string[]>([INTRO_VIDEO_STEPS[0].id]);
  const [muted, setMuted] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [caption, setCaption] = useState("");
  const [speed, setSpeed] = useState(1);
  const [time, setTime] = useState({ current: 0, duration: 0 });
  const [ended, setEnded] = useState(false);
  // Transition state: leaving = fading the current step to black;
  // ready = the current step's video has frames to show.
  const [leaving, setLeaving] = useState(false);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bubbleRef = useRef<HTMLVideoElement>(null);
  // Where the player left off when minimized.
  const resumeRef = useRef<{ time: number; playing: boolean } | null>(null);
  const pendingRef = useRef<(() => void) | null>(null);

  const step =
    INTRO_VIDEO_STEPS.find((s) => s.id === history[history.length - 1]) ??
    INTRO_VIDEO_STEPS[0];
  const progress = time.duration ? time.current / time.duration : 0;

  // Collapsed preview: silent loop. Set muted on the element directly so
  // autoplay isn't blocked before hydration.
  useEffect(() => {
    const v = bubbleRef.current;
    if (open || !v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [open, view]);

  // Expanded player: start each step from the top with sound (or pick up
  // where it was minimized). If the browser refuses unmuted playback, fall
  // back to muted.
  useEffect(() => {
    const v = videoRef.current;
    if (!open || !v) return;
    const resume = resumeRef.current;
    resumeRef.current = null;
    v.currentTime = resume?.time ?? 0;
    if (resume && !resume.playing) return;
    v.play().catch((err: DOMException) => {
      // Only autoplay blocking warrants muting; a pause during start-up
      // also rejects play() and must be left alone.
      if (err?.name !== "NotAllowedError") return;
      v.muted = true;
      setMuted(true);
      v.play().catch(() => {});
    });
  }, [open, step.id]);

  // Captions: follow the step's WebVTT track (set to hidden on load) and
  // render the active cue ourselves.
  useEffect(() => {
    const track = videoRef.current?.textTracks[0];
    if (!open || !track) return;
    const onCue = () => {
      const cues = track.activeCues;
      setCaption(
        cues && cues.length
          ? Array.from(cues)
              .map((c) => (c as VTTCue).text)
              .join(" ")
          : "",
      );
    };
    track.addEventListener("cuechange", onCue);
    return () => track.removeEventListener("cuechange", onCue);
  }, [open, step.id]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = speed;
  }, [speed, open, step.id]);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  function resetStep() {
    setTime({ current: 0, duration: 0 });
    setCaption("");
    setEnded(false);
    setReady(false);
    setLeaving(false);
    setPaused(false);
  }

  // Fade the current step to black, then switch to the next one.
  function transition(next: () => void) {
    if (timerRef.current) clearTimeout(timerRef.current);
    videoRef.current?.pause();
    setLeaving(true);
    const run = () => {
      pendingRef.current = null;
      resetStep();
      next();
    };
    if (reduceMotion) return run();
    pendingRef.current = run;
    timerRef.current = setTimeout(run, FADE_OUT_MS);
  }

  // Back to the default circle with a fresh session (after an answer that
  // opens the audit popup or another page).
  function close() {
    if (timerRef.current) clearTimeout(timerRef.current);
    pendingRef.current = null;
    videoRef.current?.pause();
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setView("bubble");
    setHistory([INTRO_VIDEO_STEPS[0].id]);
    resetStep();
  }

  // Dock to the left edge, keeping the step and playback position.
  function minimize() {
    if (open) {
      if (timerRef.current) clearTimeout(timerRef.current);
      const pending = pendingRef.current;
      const v = videoRef.current;
      if (pending) {
        // Minimized mid-transition: land on the step it was heading to.
        pending();
        resumeRef.current = { time: 0, playing: true };
      } else if (v) {
        resumeRef.current = { time: v.currentTime, playing: !v.paused && !v.ended };
      }
      v?.pause();
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      setReady(false);
    }
    setView("mini");
  }

  const onEscape = useEffectEvent(() => minimize());
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.fullscreenElement) onEscape();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function goTo(id: string) {
    transition(() => setHistory((h) => [...h, id]));
  }

  function back() {
    transition(() => setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h)));
  }

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      setEnded(false);
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      panelRef.current?.requestFullscreen?.().catch(() => {});
    }
  }

  function run(action: IntroAction) {
    if (action.type === "step") return goTo(action.to);
    if (action.type === "book") {
      videoRef.current?.pause();
      trackEvent("book_call_click", { link_text: "intro_video_widget", page_path: window.location.pathname });
      window.open(CAL_URL, "_blank", "noopener,noreferrer");
      return;
    }
    if (action.type === "audit") {
      close();
      openModal();
    }
  }

  if (view === "mini") {
    return (
      <div className="fixed bottom-8 left-0 z-[60] sm:bottom-12">
        {/* Snaps in from off-screen with a little overshoot, like it's being
            pulled onto the edge. The extra left padding (offset by -ml-3)
            keeps the tab flush with the edge while it overshoots or nudges
            out on hover. */}
        <motion.button
          type="button"
          onClick={() => setView("bubble")}
          aria-label="Show intro video from Umair"
          initial={reduceMotion ? false : { x: "-100%" }}
          animate={{ x: 0 }}
          whileHover={reduceMotion ? undefined : { x: 4 }}
          transition={{ type: "spring", stiffness: 520, damping: 17 }}
          className="-ml-3 flex cursor-pointer items-center rounded-r-full bg-brand py-1 pl-3.5 pr-1 shadow-card"
        >
          <span className="relative block h-8 w-8 overflow-hidden rounded-full ring-[1.5px] ring-white/80 sm:h-9 sm:w-9">
            <video
              src={`${INTRO_VIDEO_STEPS[0].video}#t=0.5`}
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </span>
        </motion.button>
      </div>
    );
  }

  if (!open) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        style={{ transformOrigin: "left center" }}
        className={`group fixed z-[60] ${CIRCLE_POS}`}
      >
        <button
          type="button"
          onClick={() => setView("player")}
          aria-label="Play a short intro video from Umair"
          className="relative block cursor-pointer h-[5.5rem] w-[5.5rem] overflow-hidden rounded-full bg-brand shadow-lift ring-4 ring-brand transition-transform duration-300 ease-out-soft hover:scale-[1.04] sm:h-32 sm:w-32 sm:ring-[5px]"
        >
          <video
            ref={bubbleRef}
            src={INTRO_VIDEO_STEPS[0].video}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </button>
        <button
          type="button"
          onClick={minimize}
          aria-label="Minimize intro video"
          className="absolute -right-1 cursor-pointer -top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white shadow-card transition-opacity duration-200 hover:bg-ink-soft focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <Icon name="minus" className="h-3.5 w-3.5" />
        </button>
      </motion.div>
    );
  }

  const ctrlSolid =
    "inline-flex cursor-pointer h-8 min-w-8 items-center justify-center rounded-md bg-white px-1.5 text-[0.8rem] font-bold text-ink transition-colors duration-200 hover:bg-white/85";
  const ctrlOutline =
    "inline-flex cursor-pointer h-8 min-w-8 items-center justify-center rounded-md px-1.5 text-[0.8rem] font-bold text-white ring-[1.5px] ring-inset ring-white transition-colors duration-200 hover:bg-white/15";
  const choiceCls =
    "flex w-full cursor-pointer items-center gap-3 rounded-[1.6rem] bg-black/35 px-4 py-3 text-left text-[1rem] font-semibold leading-snug text-white ring-1 ring-white/10 backdrop-blur-md transition-colors duration-200 hover:bg-black/50 sm:text-[1.05rem]";
  const badgeCls =
    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white";

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      style={{ transformOrigin: "bottom left" }}
      className="fixed inset-0 z-[60] sm:inset-auto sm:bottom-6 sm:left-6"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-label={`Intro video from Umair: ${step.title}`}
        className="relative h-full w-full overflow-hidden bg-charcoal shadow-lift sm:h-[min(40rem,calc(100dvh-3rem))] sm:w-[23rem] sm:rounded-[1.75rem]"
      >
        <motion.div
          initial={false}
          animate={{ opacity: ready && !leaving ? 1 : 0 }}
          transition={{ duration: leaving ? FADE_OUT_MS / 1000 : 0.4, ease: EASE }}
          className="absolute inset-0"
        >
          <video
            key={step.id}
            ref={videoRef}
            src={step.video}
            muted={muted}
            playsInline
            preload="auto"
            onClick={togglePlay}
            onLoadStart={(e) => {
              // Load captions without native rendering; the active cue is
              // drawn below so it can be styled like the reference.
              const t = e.currentTarget.textTracks[0];
              if (t) t.mode = "hidden";
            }}
            onCanPlay={() => setReady(true)}
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            onLoadedMetadata={(e) =>
              setTime({ current: 0, duration: e.currentTarget.duration })
            }
            onTimeUpdate={(e) => {
              const v = e.currentTarget;
              setTime({ current: v.currentTime, duration: v.duration || 0 });
            }}
            onEnded={() => setEnded(true)}
            className="absolute inset-0 h-full w-full cursor-pointer object-cover"
          >
            <track kind="captions" src={step.captions} srcLang="en" label="English" />
          </video>
        </motion.div>

        {/* progress */}
        <div className="absolute inset-x-0 top-0 h-[5px] bg-white/35">
          <div
            className="h-full bg-brand transition-[width] duration-200"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* controls */}
        <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-gradient-to-b from-black/45 to-transparent px-4 pb-10 pt-5">
          {history.length > 1 && (
            <button type="button" onClick={back} aria-label="Back" className={ctrlOutline}>
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>
          )}
          <span className="ml-auto text-[0.8rem] font-bold tabular-nums text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
            {formatTime(time.current)}
            {time.duration > 0 && ` / ${formatTime(time.duration)}`}
          </span>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute" : "Mute"}
            className={ctrlSolid}
          >
            <Icon name={muted ? "muted" : "sound"} className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setCaptionsOn((c) => !c)}
            aria-label={captionsOn ? "Hide subtitles" : "Show subtitles"}
            aria-pressed={captionsOn}
            className={captionsOn ? ctrlSolid : ctrlOutline}
          >
            CC
          </button>
          <button
            type="button"
            onClick={() => setSpeed((s) => SPEEDS[(SPEEDS.indexOf(s) + 1) % SPEEDS.length])}
            aria-label={`Playback speed ${speed}x`}
            className={ctrlOutline}
          >
            {speed}×
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen"
            className={`${ctrlOutline} hidden sm:inline-flex`}
          >
            <Icon name="expand" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={minimize}
            aria-label="Minimize video"
            className="inline-flex cursor-pointer h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-colors duration-200 hover:bg-ink-soft sm:hidden"
          >
            <Icon name="minus" className="h-4 w-4" />
          </button>
        </div>

        {(ended || paused) && ready && !leaving && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label={ended ? "Replay" : "Play"}
            className="absolute left-1/2 cursor-pointer top-[38%] inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-card backdrop-blur-sm transition-colors duration-200 hover:bg-white"
          >
            <Icon name="play" className="ml-1 h-7 w-7 fill-current" />
          </button>
        )}

        {/* answers + subtitles */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-black/45 via-black/15 to-transparent px-4 pb-4 pt-16 sm:px-5">
          {ready && (
            <motion.ul
              key={step.id}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: leaving ? 0 : 1, y: 0 }}
              transition={
                leaving
                  ? { duration: 0.15 }
                  : { duration: 0.35, ease: EASE, delay: reduceMotion ? 0 : 0.5 }
              }
              className="max-h-[45dvh] space-y-3 overflow-y-auto sm:max-h-[18rem]"
            >
              {step.choices.map((c, i) => (
                <li key={c.label}>
                  {c.action.type === "link" ? (
                    <Link href={c.action.href} onClick={close} className={choiceCls}>
                      <span className={badgeCls}>{LETTERS[i]}</span>
                      {c.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled={leaving}
                      onClick={() => run(c.action)}
                      className={choiceCls}
                    >
                      <span className={badgeCls}>{LETTERS[i]}</span>
                      {c.label}
                    </button>
                  )}
                </li>
              ))}
            </motion.ul>
          )}
          <p
            aria-live="off"
            className="mt-3 flex min-h-[1.9rem] items-end justify-center text-center"
          >
            {captionsOn && caption && (
              <span className="rounded-md bg-black/85 px-2.5 py-1 text-[0.95rem] font-medium leading-snug text-white">
                {caption}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* minimize, sitting on the corner like the reference (desktop) */}
      <button
        type="button"
        onClick={minimize}
        aria-label="Minimize video"
        className="absolute -right-3 cursor-pointer -top-3 hidden h-9 w-9 items-center justify-center rounded-full bg-ink text-white shadow-card transition-colors duration-200 hover:bg-ink-soft sm:inline-flex"
      >
        <Icon name="minus" className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
