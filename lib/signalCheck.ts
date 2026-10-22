/**
 * The LinkedIn Signal Score: nine questions across the six parts of the
 * Signal House method. Positioning, profile and content get two questions
 * each; network, conversations and pipeline get one.
 *
 * Each answer scores 0-3. Every part is scaled to 0-6 so a one-question
 * part isn't penalised, and the total is the average across parts, out of 100.
 *
 * DRAFT for Umair: the six parts, the questions and the advice are a first
 * pass at his method. Edit freely; the check and the roadmap read
 * everything from this file.
 */

export type AreaId = "positioning" | "profile" | "content" | "network" | "conversations" | "pipeline";

export const AREAS: { id: AreaId; name: string; short: string }[] = [
  { id: "positioning", name: "Positioning", short: "Positioning" },
  { id: "profile", name: "Your profile", short: "Profile" },
  { id: "content", name: "Content", short: "Content" },
  { id: "network", name: "The right audience", short: "Audience" },
  { id: "conversations", name: "Conversations", short: "Conversations" },
  { id: "pipeline", name: "Pipeline", short: "Pipeline" },
];

export type Question = {
  area: AreaId;
  q: string;
  /** worst to best */
  options: { label: string; score: number }[];
};

export const QUESTIONS: Question[] = [
  {
    area: "positioning",
    q: "If a stranger read your last ten posts, could they say what you're known for?",
    options: [
      { label: "No. It's all over the place.", score: 0 },
      { label: "Roughly, but it shifts week to week.", score: 1 },
      { label: "Mostly. One or two themes.", score: 2 },
      { label: "Yes. One clear point of view, every time.", score: 3 },
    ],
  },
  {
    area: "positioning",
    q: "Who is your LinkedIn actually for?",
    options: [
      { label: "Anyone who'll listen.", score: 0 },
      { label: "A broad group, like \"founders\".", score: 1 },
      { label: "A defined buyer, most of the time.", score: 2 },
      { label: "One clear buyer. Everything is written for them.", score: 3 },
    ],
  },
  {
    area: "profile",
    q: "Someone lands on your profile. In five seconds, what do they get?",
    options: [
      { label: "My job title and company.", score: 0 },
      { label: "Roughly what I do.", score: 1 },
      { label: "What I do, and who for.", score: 2 },
      { label: "What I do, who for, and why to talk to me.", score: 3 },
    ],
  },
  {
    area: "profile",
    q: "Your About and Featured sections…",
    options: [
      { label: "Read like a CV, or are empty.", score: 0 },
      { label: "Tell my story, but point nowhere.", score: 1 },
      { label: "Explain my offer, mostly.", score: 2 },
      { label: "Make the case and route to a clear next step.", score: 3 },
    ],
  },
  {
    area: "content",
    q: "How often do you post?",
    options: [
      { label: "Rarely, or never.", score: 0 },
      { label: "In bursts, then silence.", score: 1 },
      { label: "Most weeks.", score: 2 },
      { label: "Every week, on a calendar.", score: 3 },
    ],
  },
  {
    area: "content",
    q: "How much of your time does a good post take?",
    options: [
      { label: "Hours, so it rarely happens.", score: 0 },
      { label: "An hour or two, and it's painful.", score: 1 },
      { label: "Under an hour, with a process.", score: 2 },
      { label: "Minutes. It's written in my voice for me.", score: 3 },
    ],
  },
  {
    area: "network",
    q: "Look at your last 50 connections and followers. Who are they?",
    options: [
      { label: "Peers, recruiters and old colleagues.", score: 0 },
      { label: "A mix, with few real buyers.", score: 1 },
      { label: "A good share of buyers.", score: 2 },
      { label: "Mostly the people I want to sell to.", score: 3 },
    ],
  },
  {
    area: "conversations",
    q: "How do conversations start on LinkedIn?",
    options: [
      { label: "They don't. I rarely message anyone.", score: 0 },
      { label: "Cold pitches that mostly go unanswered.", score: 1 },
      { label: "Some warm DMs, from posts or outreach.", score: 2 },
      { label: "Steady warm conversations, every week.", score: 3 },
    ],
  },
  {
    area: "pipeline",
    q: "In the last 90 days, how many calls came from LinkedIn?",
    options: [
      { label: "None that I know of.", score: 0 },
      { label: "One or two, by luck.", score: 1 },
      { label: "A few, and I know roughly where from.", score: 2 },
      { label: "A steady flow, and I know which posts drove them.", score: 3 },
    ],
  },
];

/** The first step, per part, by how it scored. */
export const ADVICE: Record<AreaId, { low: string; mid: string; high: string }> = {
  positioning: {
    low: "Write one sentence: who you help, with what, and why you. Every post this month answers to it.",
    mid: "Cut to one buyer and two themes. Drop the posts that don't serve either.",
    high: "Own it. Say the thing your competitors won't, and say it often.",
  },
  profile: {
    low: "Rewrite your headline as who you help and the result. Not your job title.",
    mid: "Point your Featured section at one next step: a call, an audit or a resource.",
    high: "Refresh the proof. Swap in your newest result every quarter.",
  },
  content: {
    low: "Commit to one post a week for six weeks. Same day, one theme.",
    mid: "Build a simple calendar and a monthly hour to capture your ideas. Stop writing from scratch.",
    high: "Turn your best posts into a series. Consistency compounds.",
  },
  network: {
    low: "Connect with 10 buyers a week, with a note that isn't a pitch.",
    mid: "Spend 15 minutes a day commenting on your buyers' posts, not your peers'.",
    high: "Get your team amplifying. Their networks are your next audience.",
  },
  conversations: {
    low: "Reply to everyone who engages with a post. Every conversation starts there.",
    mid: "Swap cold pitches for warm openers that reference what they posted.",
    high: "Make it a system: a short list, a weekly cadence, and notes on every thread.",
  },
  pipeline: {
    low: "Start tracking. Ask every new lead, \"Where did you first see us?\"",
    mid: "Tag each lead with the post or message that started it.",
    high: "Double down on the three posts that brought the most calls.",
  },
};

export const MAX_PER_AREA = 6;

/** Per-part scores out of 6 and a total out of 100, from the answers. */
export function scoreAnswers(answers: number[]) {
  const raw = Object.fromEntries(AREAS.map((a) => [a.id, 0])) as Record<AreaId, number>;
  const count = Object.fromEntries(AREAS.map((a) => [a.id, 0])) as Record<AreaId, number>;
  QUESTIONS.forEach((q, i) => {
    count[q.area] += 1;
    if (answers[i] >= 0) raw[q.area] += q.options[answers[i]].score;
  });
  const byArea = Object.fromEntries(
    AREAS.map((a) => [a.id, Math.round((raw[a.id] / (count[a.id] * 3)) * MAX_PER_AREA)]),
  ) as Record<AreaId, number>;
  const total = Math.round((AREAS.reduce((s, a) => s + byArea[a.id], 0) / (AREAS.length * MAX_PER_AREA)) * 100);
  return { byArea, total };
}

/* ── Levels: what each result is told, and what it's asked to do next.
   Four levels by total, plus one safety rule: in the two upper levels, any
   part at 1/6 or lower is named and the call to action points at it.
   action "book" opens the discovery call; "audit" opens the free audit. ── */

export type TierId = "silent" | "patchy" | "visible" | "signal";

export type Tier = {
  id: TierId;
  min: number;
  title: string;
  line: string;
  cta: { tone: "strong" | "soft"; action: "book" | "audit"; heading: string; body: string; button: string };
};

export const TIERS: Tier[] = [
  {
    id: "silent", min: 0,
    title: "Your LinkedIn isn't working for you yet.",
    line: "Right now it's a CV, not a business asset. Good news: that's the fastest kind to fix.",
    cta: {
      tone: "strong", action: "book",
      heading: "Let's make it work for you.",
      body: "A short discovery call. We'll look at where you are and what would move first. No pitch.",
      button: "Book a Discovery Call",
    },
  },
  {
    id: "patchy", min: 40,
    title: "There's signal. It's just patchy.",
    line: "Some parts work. The rest leak attention before it turns into conversations.",
    cta: {
      tone: "strong", action: "audit",
      heading: "Fix “{weakest}” first. Get the free audit.",
      body: "We'll read your actual profile, content and outreach, and send back a prioritised plan.",
      button: "Get my free LinkedIn audit",
    },
  },
  {
    id: "visible", min: 65,
    title: "People see you. Now make them reach out.",
    line: "The foundations are there. One or two parts are holding back the conversations.",
    cta: {
      tone: "soft", action: "audit",
      heading: "Want a second pair of eyes on “{weakest}”?",
      body: "A free audit of your real profile and posts. Useful whether or not we work together.",
      button: "Get a free audit",
    },
  },
  {
    id: "signal", min: 85,
    title: "You're doing this well.",
    line: "Honestly, you may not need us. Keep this roadmap and check again in a quarter.",
    cta: {
      tone: "soft", action: "book",
      heading: "Want your team posting like this too?",
      body: "If you'd like to bring your leadership team along, we run coaching and workshops.",
      button: "Talk to us",
    },
  },
];

export const FLAG_AT_OR_BELOW = 1;

export function outcome(total: number, byArea: Record<AreaId, number>) {
  const tier = [...TIERS].reverse().find((t) => total >= t.min)!;
  const weakest = [...AREAS].sort((a, b) => byArea[a.id] - byArea[b.id])[0];
  const flagged = (tier.id === "visible" || tier.id === "signal") && byArea[weakest.id] <= FLAG_AT_OR_BELOW ? weakest : null;
  const fill = (t: string) => t.replaceAll("{weakest}", weakest.name.toLowerCase());
  const cta = flagged
    ? {
        tone: "strong" as const, action: "audit" as const,
        heading: `Strong overall. But “${flagged.name.toLowerCase()}” scored ${byArea[flagged.id]}/6.`,
        body: "That's the part quietly costing you conversations. A free audit will show exactly what to change.",
        button: "Get my free LinkedIn audit",
      }
    : { ...tier.cta, heading: fill(tier.cta.heading), body: fill(tier.cta.body) };
  return { tier: tier.id, title: tier.title, line: tier.line, cta, flagged: flagged?.id ?? null };
}

/* ── The roadmap: what each part means, what good looks like, and one
   result as proof. Proof comes from CASE_STUDIES in lib/content.ts:
   confirm each is a real, approved client result before launch. ── */

export const BANDS = {
  low: { label: "Weak signal", color: "#FF5C35" },
  mid: { label: "Patchy", color: "#D9A21B" },
  high: { label: "Strong", color: "#1F8A66" },
} as const;
export type Band = keyof typeof BANDS;
export const bandOf = (score: number): Band => (score <= 2 ? "low" : score <= 4 ? "mid" : "high");

export const REPORT: Record<AreaId, {
  meaning: string;
  good: string[];
  proof: { client: string; figure: string; line: string };
}> = {
  positioning: {
    meaning: "What you stand for, and who for. Without it, every post is a one-off and nobody remembers you.",
    good: ["One clear buyer", "Two or three themes you own", "A point of view people can repeat"],
    proof: { client: "Byzantine", figure: "2 clients", line: "Converted, once the positioning was clear." },
  },
  profile: {
    meaning: "Your profile is checked before anyone replies. If it reads like a CV, you lose them in five seconds.",
    good: ["Headline: who you help, and the result", "About makes the case", "Featured routes to one next step"],
    proof: { client: "Strateasy Consulting", figure: "6×", line: "Profile views in 60 days." },
  },
  content: {
    meaning: "Consistent posts, in your voice, aimed at buyers. It compounds, but only if it keeps going.",
    good: ["Weekly, on a calendar", "Written in your voice", "Under two hours of your time a month"],
    proof: { client: "Byzantine", figure: "1.5 hrs", line: "Founder time on content a week, down from 5." },
  },
  network: {
    meaning: "Great posts seen by the wrong people do nothing. Your network decides who your content reaches.",
    good: ["Buyers are most of your network", "You engage where buyers are", "Your team amplifies you"],
    proof: { client: "Byzantine", figure: "820 → 2,340", line: "Followers, the right ones." },
  },
  conversations: {
    meaning: "Attention only matters when it becomes a conversation. Warm DMs, not cold pitches.",
    good: ["Every engager gets a reply", "Warm openers, not pitches", "A steady weekly rhythm"],
    proof: { client: "Cycle Together", figure: "8% → 29%", line: "Outreach response rate." },
  },
  pipeline: {
    meaning: "The point of it all: calls and deals. And knowing which posts and messages brought them.",
    good: ["Calls from LinkedIn every month", "Every lead tagged to its source", "You double down on what works"],
    proof: { client: "Cycle Together", figure: "4", line: "Tier-1 procurement meetings booked in 6 weeks." },
  },
};
