## ADDED Requirements

### Requirement: Smooth scroll navigation
All anchor links (`<a href="#section-id">`) SHALL trigger smooth scrolling to the target section using CSS `scroll-behavior: smooth` on the HTML element.

#### Scenario: Clicking a nav link scrolls smoothly
- **WHEN** clicking any navigation link with an href starting with #
- **THEN** the page SHALL smoothly animate scrolling to the target section

#### Scenario: All sections are reachable
- **WHEN** clicking each nav link
- **THEN** the corresponding section SHALL be scrolled into view

### Requirement: Section IDs
Each major section SHALL have a unique id attribute matching its purpose: `#about`, `#skills`, `#projects`, `#coursework`, `#research`, `#contact`.

#### Scenario: Section IDs exist
- **WHEN** inspecting the DOM
- **THEN** each section SHALL have the correct id attribute
