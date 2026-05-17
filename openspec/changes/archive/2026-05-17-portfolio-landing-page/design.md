## Context

This is a new single-page portfolio landing page for a data scientist / ML engineer. The design is inspired by the MotherDuck website's Neo-Brutalist Editorial style, which has been fully extracted into `data.yaml`. The current state is a working HTML wireframe (`portfolio-wireframe.html`) that validates the layout, interactions, and design system. This design doc formalizes the architecture for production.

## Goals / Non-Goals

**Goals:**
- Build a fully responsive single-page portfolio with 10 sections
- Implement the Neo-Brutalist design system from the extracted tokens
- Ensure all interactive elements work (smooth scroll, resume download, contact form validation)
- Mobile-first responsive design with breakpoints at 480 / 728 / 960 / 1302px
- Zero external runtime dependencies (fully static, no build step required for basic use)

**Non-Goals:**
- No backend or database — contact form is client-side only (placeholder for future integration)
- No JavaScript framework (React, Vue, etc.) — pure HTML/CSS/JS for simplicity and portability
- No animation library — CSS transitions + IntersectionObserver only
- No CMS or content management — content is hardcoded

## Decisions

1. **Pure HTML/CSS/JS over framework**: The page is a single marketing-style landing page with no dynamic routing or state management. A framework would add complexity without benefit. If the user later wants a blog or CMS, they can migrate to Next.js or Astro.

2. **JetBrains Mono as Aeonik Mono stand-in**: Aeonik Mono is a paid custom font. JetBrains Mono is free, open-source, and visually similar (monospace with wide letter-spacing). It's loaded from Google Fonts for zero-hassle setup.

3. **CSS custom properties for design tokens**: All colors, spacing, and typography values from `data.yaml` are inlined as CSS classes rather than custom properties, since the page is small and this avoids indirection. If the project grows, migrating to CSS custom properties is straightforward.

4. **IntersectionObserver for scroll reveals**: Lighter than AOS or ScrollReveal libraries. No extra dependency, works in all modern browsers, and the animation (fade-in-up) is simple enough to not need a library.

5. **Single-file architecture for wireframe phase**: The current wireframe is a single HTML file. For production, it will be split into separate CSS and JS files for maintainability.

6. **Brutalist offset shadows via box-shadow**: The signature MotherDuck hover effect (content translates to reveal a static offset shadow) is implemented with `transform: translate()` + `box-shadow` on the button itself, rather than on a pseudo-element, for simplicity.

## Risks / Trade-offs

- **[Font licensing]** JetBrains Mono is used as a stand-in for Aeonik Mono. If the client wants the exact brand font, they need to license Aeonik Mono and self-host it. → Mitigation: Font stack falls back to monospace gracefully.
- **[Contact form]** The form is client-side only with no backend. Messages are not actually sent. → Mitigation: Form validation provides user feedback; a `mailto:` fallback or Formspree/Web3Forms integration can be added later.
- **[No framework]** If the portfolio grows to include a blog, project case studies, or dynamic content, a framework migration will be needed. → Mitigation: The HTML structure is clean and semantic, making it easy to port to any framework.
