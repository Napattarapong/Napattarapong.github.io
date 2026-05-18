# design-gallery Specification

## Purpose
TBD - created by archiving change professionalize-portfolio. Update Purpose after archive.
## Requirements
### Requirement: Gallery displays design reference images
The system SHALL display a full-width image slideshow section containing 4 design reference images from the `../material/` directory.

#### Scenario: All images render on page load
- **WHEN** the page loads
- **THEN** all 4 gallery images SHALL be present in the DOM with correct `src` attributes pointing to `../material/01.jpg`, `../material/Neobrutal-portfolio-example.png.webp`, `../material/Screenshot-2023-11-09-at-1.00.12-pm-1-1360x907.png.webp`, and `../material/images.jpeg`

### Requirement: Gallery supports slide navigation
The system SHALL provide Prev/Next buttons and dot indicators for navigating between slides.

#### Scenario: Next button advances to next slide
- **WHEN** user clicks the "Next →" button
- **THEN** the gallery SHALL animate to show the next slide

#### Scenario: Prev button goes to previous slide
- **WHEN** user clicks the "← Prev" button
- **THEN** the gallery SHALL animate to show the previous slide

#### Scenario: Dot indicator jumps to specific slide
- **WHEN** user clicks a dot indicator
- **THEN** the gallery SHALL animate to show the corresponding slide

#### Scenario: Active dot is highlighted
- **WHEN** a slide is displayed
- **THEN** the corresponding dot indicator SHALL have the `active` class

#### Scenario: Carousel wraps around
- **WHEN** user clicks Next on the last slide
- **THEN** the gallery SHALL wrap to the first slide
- **WHEN** user clicks Prev on the first slide
- **THEN** the gallery SHALL wrap to the last slide

### Requirement: Gallery supports keyboard navigation
The system SHALL respond to left/right arrow keys for slide navigation.

#### Scenario: Right arrow advances slide
- **WHEN** user presses the ArrowRight key
- **THEN** the gallery SHALL advance to the next slide

#### Scenario: Left arrow goes to previous slide
- **WHEN** user presses the ArrowLeft key
- **THEN** the gallery SHALL go to the previous slide

### Requirement: Gallery supports touch swipe
The system SHALL detect horizontal touch swipes on the gallery viewport.

#### Scenario: Swipe left advances slide
- **WHEN** user swipes left (touchstart to touchend difference > 50px)
- **THEN** the gallery SHALL advance to the next slide

#### Scenario: Swipe right goes to previous slide
- **WHEN** user swipes right (touchstart to touchend difference > 50px)
- **THEN** the gallery SHALL go to the previous slide

#### Scenario: Small swipe does nothing
- **WHEN** user swipes with a difference of 50px or less
- **THEN** the gallery SHALL NOT change slides

### Requirement: Gallery shows thumbnail strip
The system SHALL display a row of clickable thumbnail images below the main slide.

#### Scenario: Thumbnail click jumps to slide
- **WHEN** user clicks a thumbnail image
- **THEN** the gallery SHALL animate to the corresponding slide

#### Scenario: Active thumbnail is highlighted
- **WHEN** a slide is displayed
- **THEN** the corresponding thumbnail SHALL have the `active` class

### Requirement: Gallery shows contextual info panel
The system SHALL display an info panel below the thumbnails with metadata about the current slide.

#### Scenario: Info panel updates on slide change
- **WHEN** the gallery navigates to a different slide
- **THEN** the info panel SHALL update to show the correct Style, Key Elements, Color Mood, and Application for that slide

### Requirement: Gallery uses neo-brutalist styling
The gallery SHALL follow the existing neo-brutalist design system (hard borders, offset shadows, monospace typography, cream/yellow/ink palette).

#### Scenario: Gallery matches design system
- **WHEN** the gallery section is rendered
- **THEN** all borders SHALL be 2-3px solid #383838, border-radius SHALL be 0px, and fonts SHALL use JetBrains Mono / Inter

