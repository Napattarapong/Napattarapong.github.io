## ADDED Requirements

### Requirement: Page structure
The portfolio page SHALL consist of 10 sequentially ordered sections: announcement banner, navigation, hero, about, skills, coursework, featured projects, research interests, contact form, and footer. Each section SHALL be wrapped in a semantic HTML element (nav, section, footer) with a corresponding id attribute for anchor navigation.

#### Scenario: All sections render in order
- **WHEN** the page loads
- **THEN** all 10 sections SHALL be present in the DOM in the correct order

#### Scenario: Each section has a unique ID
- **WHEN** inspecting each section element
- **THEN** it SHALL have a unique id attribute matching its section name

### Requirement: Container width
Content SHALL be constrained to a max-width of 960px centered horizontally, with full-bleed background colors extending to the viewport edges.

#### Scenario: Content is centered
- **WHEN** viewing the page on a desktop (≥960px)
- **THEN** content SHALL be centered within a 960px max-width container

#### Scenario: Backgrounds are full-bleed
- **WHEN** viewing any section
- **THEN** the background color SHALL extend to the full viewport width

### Requirement: Announcement banner
The topmost element SHALL be a teal (#16AA98) full-bleed strip with white text, 10px vertical padding, 2px bottom charcoal border, and a link that scrolls to the contact section.

#### Scenario: Banner renders correctly
- **WHEN** the page loads
- **THEN** the announcement banner SHALL be visible at the top with teal background and white text

#### Scenario: Banner link scrolls to contact
- **WHEN** clicking the banner link
- **THEN** the page SHALL smoothly scroll to the contact section

### Requirement: Navigation
The navigation bar SHALL display a logo on the left and nav links on the right, with a sky-blue CTA button styled with 3px charcoal border. Nav links SHALL scroll smoothly to their respective sections.

#### Scenario: Nav links scroll to sections
- **WHEN** clicking any nav link
- **THEN** the page SHALL smoothly scroll to the corresponding section

#### Scenario: Nav CTA has brutalist hover effect
- **WHEN** hovering over the nav CTA button
- **THEN** it SHALL translate (3px, -3px) and display a charcoal offset shadow

### Requirement: Hero section
The hero SHALL display an uppercase monospace H1 headline (56px), an eyebrow label, a lead paragraph (20px/300 weight), two CTA buttons, and social links. Background SHALL be cream (#F4EFEA).

#### Scenario: Hero renders with all elements
- **WHEN** the hero section is visible
- **THEN** it SHALL contain an eyebrow, H1, lead paragraph, two buttons, and social links

#### Scenario: Resume download button triggers download
- **WHEN** clicking the "Download Resume" button
- **THEN** the browser SHALL download NapattarapongCV_intern.pdf

#### Scenario: View My Projects scrolls to projects
- **WHEN** clicking "View My Projects"
- **THEN** the page SHALL smoothly scroll to the projects section
