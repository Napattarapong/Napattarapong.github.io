## 1. Project Setup

- [x] 1.1 Create project directory structure (css/, js/, assets/)
- [x] 1.2 Create index.html with HTML5 boilerplate and Google Fonts link
- [x] 1.3 Create styles.css and link it in index.html
- [x] 1.4 Create scripts.js and link it in index.html
- [x] 1.5 Copy the resume PDF (NapattarapongCV_intern.pdf) into assets/

## 2. Design System Tokens (brutalist-design-system)

- [x] 2.1 Define CSS reset and base body styles (cream background, charcoal text, Inter font)
- [x] 2.2 Define layout utilities (.container with max-width 960px, .full-bleed)
- [x] 2.3 Define color classes (.bg-cream, .bg-yellow, .bg-blue, .bg-white, .bg-dark)
- [x] 2.4 Define typography classes (.section-label, .section-title, .section-desc)
- [x] 2.5 Define button styles (.btn, .btn-primary, .btn-secondary, .btn-dark, .btn-sticker) with brutalist hover effects
- [x] 2.6 Define card styles (.card, .card-grid, .card-icon, .card-tags) with scale + offset shadow hover
- [x] 2.7 Define tag pill styles (.tag variants for blue, green, purple, yellow, coral, orange)
- [x] 2.8 Define divider style (.brutal-divider) — 3px solid charcoal
- [x] 2.9 Define scroll reveal animation (.reveal, .reveal.visible) with IntersectionObserver
- [x] 2.10 Define responsive breakpoints (mobile-first: 480 / 728 / 960 / 1302px)
- [x] 2.11 Define input and form styles matching the newsletter input pattern

## 3. Portfolio Layout (portfolio-layout)

- [x] 3.1 Implement announcement banner (teal bg, white text, link to #contact)
- [x] 3.2 Implement navigation bar (logo, links, CTA button with hover effect)
- [x] 3.3 Implement hero section (eyebrow, H1, lead paragraph, 2 CTAs, social links)
- [x] 3.4 Implement about section (bio text, 4 stat boxes in 2x2 grid)
- [x] 3.5 Implement skills section (6 category groups with skill tags)
- [x] 3.6 Implement featured projects section (2 project cards + 3 card grid)
- [x] 3.7 Implement coursework section (6 coursework items in grid)
- [x] 3.8 Implement research interests section (3 research cards + CTA buttons)
- [x] 3.9 Implement contact form section (3 fields + send button)
- [x] 3.10 Implement footer (4-column grid with nav, contact, social, colophon)

## 4. Interactive Navigation (interactive-navigation)

- [x] 4.1 Add smooth scroll behavior to HTML element via CSS
- [x] 4.2 Add id attributes to all major sections (#about, #skills, #projects, #coursework, #research, #contact)
- [x] 4.3 Wire nav links to corresponding section ids
- [x] 4.4 Wire announcement banner link to #contact
- [x] 4.5 Wire hero CTA "View My Projects" to #projects
- [x] 4.6 Wire research CTA buttons to #contact

## 5. Contact Form (contact-form)

- [x] 5.1 Add Name (text), Email (email), and Message (textarea) fields
- [x] 5.2 Implement client-side validation (all fields required)
- [x] 5.3 Implement submit handler with success/error alerts
- [x] 5.4 Add input hover and focus border color transition (#2BA5FF)

## 6. Resume Download (resume-download)

- [x] 6.1 Add download link in hero section pointing to resume PDF
- [x] 6.2 Add download link in footer pointing to resume PDF
- [x] 6.3 Add `download` attribute to both resume links

## 7. Scroll Reveal Animations (scroll-reveal-animations)

- [x] 7.1 Add IntersectionObserver script in scripts.js with 0.1 threshold
- [x] 7.2 Add .reveal class to all sections below the hero
- [x] 7.3 Verify reveal animation triggers correctly on scroll

## 8. Quality Assurance

- [x] 8.1 Test all navigation links scroll to correct sections
- [x] 8.2 Test resume download on both buttons
- [x] 8.3 Test contact form validation (empty fields, valid submission)
- [x] 8.4 Test responsive layout at mobile (≤768px) and desktop (≥960px) widths
- [x] 8.5 Verify all hover effects work (cards, buttons, tags, nav links)
- [x] 8.6 Verify scroll reveal animations trigger correctly
- [x] 8.7 Test in Chrome and Firefox
