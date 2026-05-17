## Why

I need a personal portfolio landing page to showcase my data science and ML engineering skills to potential employers and collaborators. The current wireframe proves the layout and interactions work — now it needs to be formalized into a proper, deployable project with clean architecture and the Neo-Brutalist Editorial design system extracted from motherduck.com.

## What Changes

- Build a single-page portfolio landing page with 10 sections
- Apply the MotherDuck-inspired Neo-Brutalist design system (cream canvas, charcoal ink, sky-blue + yellow accents, monospace display type, hard offset shadows)
- Make all interactive elements functional (smooth scroll navigation, resume download, contact form validation)
- Structure the page with semantic HTML and responsive CSS (mobile-first breakpoints at 480 / 728 / 960 / 1302px)
- Reference the existing design extraction (`data.yaml`) as the source of truth for colors, typography, spacing, and component styles

## Capabilities

### New Capabilities
- `portfolio-layout`: Full single-page portfolio with announcement banner, nav, hero, about, skills, projects, coursework, research, contact form, and footer
- `brutalist-design-system`: CSS implementation of the Neo-Brutalist design tokens — color palette, typography scale, spacing system, shadows, buttons, cards, tags, and form inputs
- `interactive-navigation`: Smooth-scroll anchor navigation linking all sections, with active state management
- `contact-form`: Client-side validated contact form with name, email, and message fields
- `resume-download`: Direct file download link to `NapattarapongCV_intern.pdf`
- `scroll-reveal-animations`: IntersectionObserver-based fade-in-up entrance animations for sections

### Modified Capabilities
- None — this is a new project with no existing specs

## Impact

- Single HTML file (`portfolio-wireframe.html` has the current prototype; will be refactored into organized code)
- CSS design tokens extracted from `data.yaml`
- Resume PDF (`NapattarapongCV_intern.pdf`) referenced as a download asset
- No external dependencies beyond Google Fonts (Inter + JetBrains Mono)
- No backend or API dependencies — fully static site
