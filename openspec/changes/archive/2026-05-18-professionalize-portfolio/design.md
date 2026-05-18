## Context

The portfolio site currently uses emoji throughout (skills headers, project cards, coursework, research cards, hero social icons, footer) which conflicts with the neo-brutalist professional aesthetic. A new design gallery section will showcase visual design references from `../material/` using a slideshow carousel.

Current state:
- `index.html` — 6 skill categories with emoji, 2 project cards with emoji, 3 mini-cards with emoji, 6 coursework items with emoji, 3 research cards with emoji, hero social icons as unicode symbols, footer with ❤️
- `css/styles.css` — Full neo-brutalist design system (no gallery styles yet)
- `js/scripts.js` — Scroll reveal + contact form handler only

## Goals / Non-Goals

**Goals:**
- Remove every emoji from the page (zero emoji in HTML)
- Replace emoji with clean typographic labels and minimal geometric SVG decorators
- Add a new Design Gallery section between Skills and Projects
- Gallery slideshow with 4 images, prev/next, dots, thumbnails, info panel
- Gallery supports keyboard arrows and touch swipe
- Update hero social icons to text labels (GH, LI, KG, EM)
- Update footer colophon text

**Non-Goals:**
- No new external dependencies (no jQuery, no carousel library)
- No changes to the blog page or blog-wireframe
- No changes to the design-wireframe.html
- No backend or API changes

## Decisions

1. **Pure CSS/JS carousel (no library)**
   - Why: The site has zero external dependencies, keeps the page lightweight, and the carousel is simple enough (4 slides)
   - Alternative considered: Swiper.js — overkill for 4 slides

2. **Gallery placed between Skills and Projects**
   - Why: creates a natural visual break between "what I know" and "what I built"
   - Alternative: after Research — too far down the page

3. **Images referenced via relative path `../material/`**
   - Why: images live outside the repo in the parent landingpage directory
   - Note: for production deployment, images should be copied into `img/` folder

4. **Emoji replaced with:**
   - Skill headers: emoji removed, category name in all-caps (e.g., `📊 Statistics` → `STATISTICS`)
   - Project images: emoji replaced with subtle SVG geometric pattern blocks
   - Card icons: emoji replaced with minimal geometric symbols (■ ● ▲)
   - Coursework: emoji removed from headings
   - Research cards: emoji removed from headings
   - Hero social: unicode symbols → text labels `GH` `LI` `KG` `EM`
   - Footer: `Hosted with ❤️` → `Hosted on GitHub Pages`

5. **Info panel data stored in JS object**
   - Why: keeps HTML clean and makes it easy to update slide metadata

## Risks / Trade-offs

- [Image path breakage] → Images use relative `../material/` path; if the site is deployed to a subdirectory, paths must be updated
- [Touch swipe sensitivity] → 50px threshold prevents accidental navigation on scroll
- [No lazy loading] → All 4 images load on page load; acceptable given small count and reasonable file sizes

## Migration Plan

1. Update `css/styles.css` — add gallery styles, update `.project-image` for SVG blocks, update `.hero-social` for text labels
2. Update `js/scripts.js` — add gallery carousel logic
3. Update `index.html` — remove all emoji, add gallery section, update social links, update footer
4. Open in browser and verify all images load, gallery navigation works, no emoji remain
