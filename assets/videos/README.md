# Video files

Reference a video from `index.html` inside a project's `.project-videos` block.
Each `<video>` slot shows the file once its metadata loads, and falls back to a
"Watch this reel on Instagram" note if the file is missing or fails to load.
Every video also has a poster frame in `posters/` (same name, `.jpg`).

**Current projects:**

| Project | Files |
|---|---|
| Joe's Pizza & Pizza Zoo Party | `joes-pizza-williamsburg.mp4`, `joes-pizza-usq.mp4`, `pizza-zoo-r1d0.mp4` |
| Fashion Brand Reel | `nycgods-draft9.mp4` |
| NYC Clubbing | `musica-r7d0.mp4`, `club-promo.mp4`, `beneps.m4v`, `provost.m4v` |

`beneps.m4v` and `provost.m4v` are wired in but still the original,
unoptimized exports (no poster frame) — re-encode with the recipe below and
add poster frames when ffmpeg is available.

Other clips sitting in this folder (`DUMBO draft 5.M4V`,
`otw2class DRAFT 1.M4V`) aren't wired into the site yet and are still the
original, unoptimized exports.

**Naming:** lowercase kebab-case, no spaces or apostrophes.

**Encoding recipe** (H.264 + AAC, fast-start, capped at 1080x1920):

```sh
ffmpeg -i in.M4V -map 0:v:0 -map 0:a:0 \
  -vf "scale='min(1080,iw)':'min(1920,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2" \
  -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p -movflags +faststart \
  -c:a aac -b:a 128k name.mp4
# if the result is over ~10MB, add e.g. -maxrate 2700k -bufsize 5400k
ffmpeg -ss 1 -i name.mp4 -frames:v 1 -q:v 3 posters/name.jpg
```

**Size:** GitHub hard-blocks any single file over 100MB, and warns above 50MB.
Aim for under ~10MB per clip. For longer films, upload to YouTube/Vimeo and
swap in an embed.
