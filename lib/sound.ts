/**
 * Quiet UI sounds, synthesised with Web Audio: no audio files to load.
 *
 * Browsers keep audio locked until the visitor first clicks, taps or presses
 * a key, so nothing can sound on page load. The first interaction unlocks the
 * context; from then on hover and swipe sounds play too. A sound requested
 * while the context is still locked is dropped rather than queued, so locked
 * hovers never burst out all at once later.
 */

let ctx: AudioContext | null = null;
let master: GainNode | null = null;

function getCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(ctx.destination);
  }
  return ctx;
}

if (typeof window !== "undefined") {
  const unlock = () => {
    const c = getCtx();
    if (c && c.state === "suspended") c.resume().catch(() => {});
  };
  for (const ev of ["pointerdown", "touchend", "keydown"]) {
    window.addEventListener(ev, unlock, { capture: true, passive: true });
  }
}

type Voice = (c: AudioContext, out: GainNode, t: number) => void;

function play(voice: Voice) {
  const c = getCtx();
  if (!c || !master) return;
  const out = master;
  if (c.state === "running") return voice(c, out, c.currentTime);
  const asked = performance.now();
  c.resume()
    .then(() => {
      if (performance.now() - asked < 200) voice(c, out, c.currentTime);
    })
    .catch(() => {});
}

/** One enveloped oscillator note. */
function note(
  c: AudioContext,
  out: GainNode,
  t: number,
  { freq, to, type = "sine", gain, attack = 0.004, decay }: {
    freq: number;
    to?: number;
    type?: OscillatorType;
    gain: number;
    attack?: number;
    decay: number;
  },
) {
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (to) osc.frequency.exponentialRampToValueAtTime(to, t + decay);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  osc.connect(g).connect(out);
  osc.start(t);
  osc.stop(t + attack + decay + 0.05);
}

// Pentatonic steps so neighbouring cards always sound good together.
const TICK_SCALE = [880, 988, 1175, 1319, 1480, 1760];
let lastTick = 0;

/** Soft wooden tap: card hover, swipe snap. `step` picks the pitch. */
export function playTick(step = 0) {
  const now = performance.now();
  if (now - lastTick < 70) return;
  lastTick = now;
  const freq = TICK_SCALE[((step % TICK_SCALE.length) + TICK_SCALE.length) % TICK_SCALE.length];
  play((c, out, t) => {
    note(c, out, t, { freq, gain: 0.05, attack: 0.002, decay: 0.07 });
    note(c, out, t, { freq: freq * 2.01, type: "triangle", gain: 0.012, attack: 0.002, decay: 0.04 });
  });
}

/** Two-note rising chime: primary CTA clicks. */
export function playChime() {
  play((c, out, t) => {
    note(c, out, t, { freq: 659, gain: 0.07, decay: 0.32 });
    note(c, out, t + 0.07, { freq: 988, gain: 0.06, decay: 0.42 });
  });
}

/** Low, short sweep upward: opening a card or panel. */
export function playOpen() {
  play((c, out, t) => {
    note(c, out, t, { freq: 420, to: 760, gain: 0.05, attack: 0.01, decay: 0.16 });
  });
}

/** Soft rising "scanning" glide while the audit request is in flight. */
export function playScan() {
  play((c, out, t) => {
    const osc = c.createOscillator();
    const lp = c.createBiquadFilter();
    const g = c.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(260, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 1.1);
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(900, t);
    lp.frequency.exponentialRampToValueAtTime(2600, t + 1.1);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.03, t + 0.15);
    g.gain.setValueAtTime(0.03, t + 0.9);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.25);
    osc.connect(lp).connect(g).connect(out);
    osc.start(t);
    osc.stop(t + 1.3);
  });
}

/** Three-note arpeggio: something went through. */
export function playSuccess() {
  play((c, out, t) => {
    [784, 988, 1319].forEach((freq, i) =>
      note(c, out, t + i * 0.09, { freq, gain: 0.06, decay: 0.45 }),
    );
  });
}

/** Single low, muted note: a form field needs attention. */
export function playNudge() {
  play((c, out, t) => {
    note(c, out, t, { freq: 330, to: 294, gain: 0.05, attack: 0.006, decay: 0.18 });
  });
}
