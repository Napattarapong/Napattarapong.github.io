## ADDED Requirements

### Requirement: Blog post header
The blog detail page SHALL display a header with tag pills, the post title (JetBrains Mono, 32px, 400 weight), and metadata line (date, read time, tags) in 13px monospace.

#### Scenario: Post header renders
- **WHEN** viewing a blog post
- **THEN** the header SHALL contain tags, title, and metadata

### Requirement: Blog post typography
The blog post body SHALL support: H2 (JetBrains Mono 24px with bottom border), H3 (JetBrains Mono 18px), paragraphs (Inter 16px/1.8), inline code (monospace with 1px border), code blocks (pre with 2px border, white bg, 20px padding), blockquotes (left blue border, blue tint bg), unordered/ordered lists, and horizontal rules.

#### Scenario: Post typography renders correctly
- **WHEN** viewing a blog post body
- **THEN** all typography elements SHALL render with correct styles

#### Scenario: Code blocks display correctly
- **WHEN** viewing a code block in a blog post
- **THEN** it SHALL have a 2px charcoal border, white background, and monospace font

### Requirement: Back navigation
Each blog detail page SHALL have a "← Back to all posts" link at the top that navigates to the blog list.

#### Scenario: Back link navigates to list
- **WHEN** clicking "← Back to all posts"
- **THEN** the browser SHALL navigate to the blog list page

### Requirement: Reading time
Each post SHALL display an estimated reading time calculated at approximately 200 words per minute.

#### Scenario: Reading time displays
- **WHEN** viewing a blog post
- **THEN** the read time SHALL be displayed in the metadata
