# Picture files

Drop image files in this folder and reference them from `index.html` (hero
photo, About portrait, Photography gallery).

**TODO: compress the Photography gallery images.** They're currently full
camera/export resolution (~37MB total as of the gallery launch), which is
slow on mobile or a weak connection. Before adding more, resize the long
edge to ~2000px and re-export as `.jpg` at ~80% quality — tools like
ImageOptim, Squoosh, or `sips`/Handbrake-equivalent CLI all work. Aim for
well under 1MB per image.

**Format:** `.jpg` or `.png`, whichever the source is — no need to convert.
