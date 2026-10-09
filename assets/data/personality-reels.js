/*
 * "My Personality" section — editable content.
 *
 * This is the ONLY file you need to edit to add, update, or reorder cards
 * in the "My Personality" section on the homepage (the Networking / Dating /
 * Content lanes, right below Client Highlights). The page reads this array
 * and builds the cards automatically — you never need to touch index.html
 * or style.css to add a real reel.
 *
 * ── HOW TO FILL IN A REAL CARD (no invented data) ────────────────────────
 * Example: turning the placeholder "networking-1" into a real card once you
 * have an actual TikTok reel and its stats:
 *
 *   {
 *     id: "networking-1",
 *     lane: "networking",
 *     title: "How I turn a coffee chat into a follow-up",
 *     platform: "tiktok",
 *     contentType: "personal",
 *     reelUrl: "https://www.tiktok.com/@annikainnyc/video/7312345678901234567",
 *     thumbnail: "assets/pictures/personality/networking-1.jpg",
 *     context: "What I actually say when I want to stay in touch.",
 *     role: "On camera, filmed and edited solo",
 *     credit: null,
 *     stats: { views: 18400, likes: 2100, comments: 134, shares: 61, saves: 410 },
 *     statsAsOf: "2026-10-09"
 *   }
 *
 * Only fill in the stats you actually have — leave the rest as `null`.
 * `null` means "unknown," never 0. Do not estimate or round up a number.
 *
 * ── FIELD REFERENCE ───────────────────────────────────────────────────────
 * id          Stable, unique string. Don't reuse or reorder existing ids —
 *             other code may reference them later. Add new ones as
 *             "<lane>-2", "<lane>-3", etc.
 * lane        One of: "networking" | "dating" | "content"
 * title       Short card title. Placeholder cards can leave this as-is.
 * platform    One of: "tiktok" | "instagram" | null (null = not decided yet)
 * contentType Always "personal" in this section. (Client/brand UGC lives in
 *             the separate Client Highlights section above — never relabel
 *             a client deliverable as personal content here.)
 * reelUrl     Full URL to the real TikTok/Instagram post, or null. A card
 *             is rendered as a placeholder ("Reel coming soon") whenever
 *             this is null — that's the only switch that matters. Do not
 *             point this at media that hasn't been provided/approved.
 * thumbnail   Path to a local image (e.g. "assets/pictures/personality/...")
 *             or null. Only used once reelUrl is also set; ignored for
 *             placeholders so nobody mistakes a stand-in image for a real
 *             preview.
 * context     One short sentence of real context. Leave the placeholder
 *             text alone until you have the real line.
 * role        One short sentence describing your role on this piece.
 * credit      Optional brand/collaborator credit STRING, or null. Must be
 *             supplied by Annika — never invent a name here.
 * stats       Object of { views, likes, comments, shares, saves }. Each is
 *             a number or null. Only non-null numbers are displayed — the
 *             rest are simply omitted, never shown as 0 or "—" per metric.
 * statsAsOf   "YYYY-MM-DD" string for when the stats were last checked, or
 *             null if there are no stats yet. Shown as "Stats as of <date>"
 *             next to whatever numbers are present; omitted entirely when
 *             stats are all null (the card shows "Stats pending" instead).
 *
 * ── ADDING MORE CARDS ─────────────────────────────────────────────────────
 * Just add another object to the array below with a new id in the right
 * lane. The layout (grid, card width, etc.) already handles any number of
 * cards per lane — no CSS or HTML changes needed.
 */

window.PERSONALITY_REELS = [
  {
    id: "networking-1",
    lane: "networking",
    title: "Title TBD",
    platform: null,
    contentType: "personal",
    reelUrl: null,
    thumbnail: null,
    context: "One-line context goes here once this reel is picked.",
    role: "Role TBD",
    credit: null,
    stats: { views: null, likes: null, comments: null, shares: null, saves: null },
    statsAsOf: null
  },
  {
    id: "dating-1",
    lane: "dating",
    title: "Title TBD",
    platform: null,
    contentType: "personal",
    reelUrl: null,
    thumbnail: null,
    context: "One-line context goes here once this reel is picked.",
    role: "Role TBD",
    credit: null,
    stats: { views: null, likes: null, comments: null, shares: null, saves: null },
    statsAsOf: null
  },
  {
    id: "content-1",
    lane: "content",
    title: "Title TBD",
    platform: null,
    contentType: "personal",
    reelUrl: null,
    thumbnail: null,
    context: "One-line context goes here once this reel is picked.",
    role: "Role TBD",
    credit: null,
    stats: { views: null, likes: null, comments: null, shares: null, saves: null },
    statsAsOf: null
  }
];
