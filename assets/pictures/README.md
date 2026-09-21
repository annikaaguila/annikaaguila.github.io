# Picture files

Reference images from `index.html` / `about.html` (hero photo, About portrait,
Photography gallery).

**Naming:** lowercase kebab-case, no spaces or apostrophes.

**Gallery photos:** resize the long edge to ~1600px and export as `.jpg` at
~80-82% quality (progressive, keep the colour profile) before adding — aim for
well under 300KB each. Then add `width`/`height` attributes matching the
exported pixel size to the `<img>` so the layout doesn't shift while loading.
`sips -Z 1600 in.jpg --out out.jpg` works for a quick resize.

**Portrait:** `annika-portrait.webp` is served first (via `<picture>`);
`annika-portrait.png` is the fallback for browsers without WebP.
