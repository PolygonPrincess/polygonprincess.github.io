# polygonprincess.com

Static site for Polygon Princess, hosted on GitHub Pages with the custom domain
`polygonprincess.com` (see `CNAME`).

## Pages

| File | URL |
| --- | --- |
| `index.html` | `/` |
| `about/index.html` | `/about/` |
| `support/index.html` | `/support/` |
| `404.html` | automatic GitHub Pages 404 page |

`about.html`, `support.html`, and `contact.html` are small redirect stubs that
preserve old links.

## Local preview

The site uses root-relative paths, so serve it from the repository root rather
than opening the HTML files directly:

```sh
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Shared files

- `assets/win95.css` — the Windows 95 theme (based on
  [AlexBSoft/win95.css](https://github.com/AlexBSoft/win95.css), MIT).
- `assets/site.js` — Bootstrap 5 tooltips and the Clippy bootstrap/hover logic.
- `assets/clippyjs/` — vendored Clippy.js. Only the `Clippy` agent is kept.
  `assets/site.js` sets `clippy.BASE_PATH` to `/assets/clippyjs/agents/` so the
  agent loads correctly from every page.

## Images and metadata

- `assets/preview.png` — 1200×630 Open Graph / Twitter preview image.
- `assets/apple-touch-icon.png` — 180×180 home-screen icon.
- `favicon.ico` — multi-size favicon.
- `assets/polygon_princess_logo.png` — high-resolution logo source used to build
  the preview image.

When changing page titles or descriptions, update both the standard meta tags and
the Open Graph / Twitter tags in that page's `<head>`.

## Validation

```sh
npx --yes html-validate@9 index.html about/index.html support/index.html 404.html
```

## Deployment

Push to the default branch. GitHub Pages serves the repository directly;
`.nojekyll` disables Jekyll processing.

## Credits

- Windows 95 CSS: Alex B, MIT.
- Clippy.js: see the upstream project for its license and attribution.
- Bootstrap 5.3.8 and jQuery 3.7.1 are loaded from public CDNs with SRI hashes.
