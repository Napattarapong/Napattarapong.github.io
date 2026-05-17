## ADDED Requirements

### Requirement: Scroll reveal animation
Sections SHALL fade in from below when scrolled into view. The animation SHALL use IntersectionObserver with a threshold of 0.1. The CSS transition SHALL be `opacity 0.6s ease-out, transform 0.6s ease-out` from `translateY(30px)` + `opacity: 0` to `translateY(0)` + `opacity: 1`.

#### Scenario: Section is hidden initially
- **WHEN** the page first loads
- **THEN** sections below the fold SHALL have opacity: 0 and translateY(30px)

#### Scenario: Section reveals on scroll
- **WHEN** scrolling a section into view (≥10% visible)
- **THEN** the section SHALL animate to opacity: 1 and translateY(0)

#### Scenario: Non-reveal elements are unaffected
- **WHEN** inspecting elements without the .reveal class
- **THEN** they SHALL NOT have the reveal animation applied

### Requirement: Section divider
Sections SHALL be separated by a 3px solid #383838 horizontal rule (`<hr class="brutal-divider">`).

#### Scenario: Dividers exist between sections
- **WHEN** viewing the page
- **THEN** each section SHALL be separated by a 3px charcoal divider
