/*
 * "My Personality" section — editable content.
 *
 * This is the ONLY file you need to edit to add, update, or reorder cards
 * in the "My Personality" section on the homepage (the Networking + Advice
 * and NYC Edits lanes, right below Client Highlights). The page reads this
 * array and builds the cards automatically — you never need to touch
 * index.html or style.css to add a real reel.
 *
 * The "dating" lane is intentionally omitted for now (no reel supplied yet).
 * Its lane heading/container in index.html is commented out — uncomment it
 * and add dating-* entries here once there's a real reel to show. Until
 * then, nothing public references an unfinished "dating" card.
 *
 * ── HOW TO ADD ANOTHER REAL CARD (no invented data) ──────────────────────
 *   {
 *     id: "networking-4",
 *     lane: "networking",
 *     title: "Short, honest title",
 *     platform: "tiktok",
 *     contentType: "personal",
 *     reelUrl: "https://www.tiktok.com/@annikainnyc/video/<id>",
 *     thumbnail: "assets/pictures/personality/networking-4.jpg",
 *     context: "The real caption or a one-line description of the reel.",
 *     role: "On camera, filmed and edited solo",
 *     credit: null,
 *     stats: { views: null, likes: 2100, comments: 134, shares: null, saves: null },
 *     statsAsOf: "2026-10-09"
 *   }
 *
 * Only fill in the stats you actually have — leave the rest as `null`.
 * `null` means "unknown," never 0. Do not estimate or round up a number.
 *
 * ── FIELD REFERENCE ───────────────────────────────────────────────────────
 * id          Stable, unique string. Don't reuse or reorder existing ids —
 *             other code may reference them later. Add new ones as
 *             "<lane>-4", "<lane>-5", etc.
 * lane        One of: "networking" | "dating" | "content"
 * title       Short card title.
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
 *             preview. The six thumbnails below were saved from each
 *             reel's own TikTok share-card image, then cropped to drop the
 *             blurred letterbox bars.
 * context     One short sentence of real context — the reel's own caption
 *             or on-screen text, not a marketing line.
 * role        One short sentence describing your role on this piece.
 * credit      Optional brand/collaborator credit STRING, or null. Must be
 *             supplied by Annika — never invent a name here.
 * stats       Object of { views, likes, comments, shares, saves }. Each is
 *             a number or null. Only non-null numbers are displayed — the
 *             rest are simply omitted, never shown as 0 or "—" per metric.
 *             likes/comments below were read live from each reel's public
 *             TikTok share-card data; TikTok's public page doesn't expose
 *             views/shares/saves, so those stay null until supplied from
 *             your own analytics.
 * statsAsOf   "YYYY-MM-DD" string for when the stats were last checked, or
 *             null if there are no stats yet. Shown as "Stats as of <date>"
 *             next to whatever numbers are present; omitted entirely when
 *             stats are all null (the card shows "Stats pending" instead).
 *
 * ── ADDING MORE CARDS ─────────────────────────────────────────────────────
 * Just add another object to the array below with a new id in the right
 * lane. The layout already handles any number of cards per lane — no CSS
 * or HTML changes needed.
 */

window.PERSONALITY_REELS = [
  {
    id: "networking-1",
    lane: "networking",
    title: "Five pieces of networking advice",
    platform: "tiktok",
    contentType: "personal",
    reelUrl: "https://www.tiktok.com/@annikainnyc/video/7693208885045349662",
    thumbnail: "assets/pictures/personality/networking-1.jpg",
    context: "Five pieces of advice from someone who goes on more than 10 coffee chats a month.",
    role: "On camera, filmed and edited solo",
    credit: null,
    stats: { views: null, likes: 561, comments: 13, shares: null, saves: null },
    statsAsOf: "2026-10-09"
  },
  {
    id: "networking-2",
    lane: "networking",
    title: "Let's actually network",
    platform: "tiktok",
    contentType: "personal",
    reelUrl: "https://www.tiktok.com/@annikainnyc/video/7688443514652265759",
    thumbnail: "assets/pictures/personality/networking-2.jpg",
    context: "i'm serious!! let's chat :)",
    role: "On camera, filmed and edited solo",
    credit: null,
    stats: { views: null, likes: 87, comments: 21, shares: null, saves: null },
    statsAsOf: "2026-10-09"
  },
  {
    id: "networking-3",
    lane: "networking",
    title: "Intrusive thought: go say hi",
    platform: "tiktok",
    contentType: "personal",
    reelUrl: "https://www.tiktok.com/@annikainnyc/video/7687003463036767519",
    thumbnail: "assets/pictures/personality/networking-3.jpg",
    context: "today is probably not the day but maybe next time 🥡",
    role: "On camera, filmed and edited solo",
    credit: null,
    stats: { views: null, likes: 1255, comments: 20, shares: null, saves: null },
    statsAsOf: "2026-10-09"
  },
  {
    id: "content-1",
    lane: "content",
    title: "2.5 years in NYC",
    platform: "tiktok",
    contentType: "personal",
    reelUrl: "https://www.tiktok.com/@annikainnyc/video/7693600327030902047",
    thumbnail: "assets/pictures/personality/content-1.jpg",
    context: "lived here for 2.5 years <3 sml for nyc",
    role: "On camera, filmed and edited solo",
    credit: null,
    stats: { views: null, likes: 177, comments: 5, shares: null, saves: null },
    statsAsOf: "2026-10-09"
  },
  {
    id: "content-2",
    lane: "content",
    title: "POV: trek out to Brooklyn",
    platform: "tiktok",
    contentType: "personal",
    reelUrl: "https://www.tiktok.com/@annikainnyc/video/7692828416378146078",
    thumbnail: "assets/pictures/personality/content-2.jpg",
    context: "damn i need to come to bk more … send some recs over :)",
    role: "On camera, filmed and edited solo",
    credit: null,
    stats: { views: null, likes: 60, comments: 11, shares: null, saves: null },
    statsAsOf: "2026-10-09"
  },
  {
    id: "content-3",
    lane: "content",
    title: "Union Square, feeling blessed",
    platform: "tiktok",
    contentType: "personal",
    reelUrl: "https://www.tiktok.com/@annikainnyc/video/7675886469252255007",
    thumbnail: "assets/pictures/personality/content-3.jpg",
    context: "i love you nyc",
    role: "On camera, filmed and edited solo",
    credit: null,
    stats: { views: null, likes: 126, comments: 2, shares: null, saves: null },
    statsAsOf: "2026-10-09"
  }
];
