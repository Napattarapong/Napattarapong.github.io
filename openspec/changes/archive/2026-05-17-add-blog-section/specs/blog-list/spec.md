## ADDED Requirements

### Requirement: Blog post card
The blog list page SHALL display posts as cards with a date block on the left (day/month/year), content on the right (tags, title, excerpt, read time), and a 2px charcoal border. The card SHALL be clickable and navigate to the detail page. On hover, the card SHALL scale to 1.02 and display a charcoal offset shadow (-6px 6px).

#### Scenario: Blog card renders correctly
- **WHEN** viewing the blog list page
- **THEN** each blog post SHALL be displayed as a card with date block, tags, title, excerpt, and read time

#### Scenario: Blog card hover effect
- **WHEN** hovering over a blog card
- **THEN** the card SHALL scale to 1.02 and show a charcoal offset shadow

#### Scenario: Clicking a card navigates to detail
- **WHEN** clicking a blog card
- **THEN** the browser SHALL navigate to the post's detail page

### Requirement: Post ordering
Blog posts SHALL be ordered by date descending (newest first). Each post SHALL display its publication date.

#### Scenario: Posts ordered by date
- **WHEN** viewing the blog list
- **THEN** posts SHALL be ordered newest first

### Requirement: Tag pills
Each blog card SHALL display tag pills matching the existing portfolio tag system (tag-blue, tag-green, tag-purple, tag-yellow, tag-coral, tag-orange).

#### Scenario: Tags render on cards
- **WHEN** viewing a blog card
- **THEN** tag pills SHALL be visible with correct colors
