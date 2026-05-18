## Why

The current portfolio uses emoji throughout (skills, projects, coursework, research) which undermines the professional, brutalist aesthetic. Adding a design gallery slideshow will showcase visual design references and demonstrate broader creative capability.

## What Changes

- Remove ALL emoji from the page (skills section headers, project card icons, coursework headings, research cards, hero social icons, footer)
- Replace emoji with clean typographic labels and minimal geometric SVG decorators
- Add a new **Design Gallery** section with a full slideshow carousel
- Gallery slideshow uses 4 images from `../material/` (01.jpg, Neobrutal-portfolio-example.png.webp, Screenshot-..., images.jpeg)
- Gallery features: prev/next buttons, dot indicators, thumbnail strip, info panel, keyboard nav, touch swipe
- Update hero social links: replace unicode symbols (⌂▣◈✉) with text labels (GH LI KG EM)
- Update footer colophon: remove "Hosted with ❤️" → "Hosted on GitHub Pages"
- Wire the gallery JavaScript into `scripts.js`

## Capabilities

### New Capabilities
- `design-gallery`: A full-width image slideshow section showcasing design references with navigation controls, thumbnail strip, and contextual info panel

### Modified Capabilities
<!-- No spec-level requirement changes to existing capabilities -->

## Impact

- **Files modified**: `index.html`, `css/styles.css`, `js/scripts.js`
- **New assets referenced**: `../material/01.jpg`, `../material/Neobrutal-portfolio-example.png.webp`, `../material/Screenshot-2023-11-09-at-1.00.12-pm.12-pm-1-1360x907.png.webp`, `../material/images.jpeg`