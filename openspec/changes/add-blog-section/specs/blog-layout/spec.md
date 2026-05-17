## ADDED Requirements

### Requirement: Consistent header and footer
The blog list and detail pages SHALL use the same navigation bar and footer as the main portfolio page. The "Blog" nav link SHALL be styled as active (sky-blue underline or color) when on any blog page.

#### Scenario: Blog page has same header
- **WHEN** viewing any blog page
- **THEN** the navigation bar SHALL match the main portfolio nav

#### Scenario: Blog link is active
- **WHEN** viewing a blog page
- **THEN** the "Blog" nav link SHALL have an active state indicator

### Requirement: Neo-Brutalist styling
Blog pages SHALL use the same design tokens as the portfolio: cream background (#F4EFEA), charcoal (#383838) borders and text, JetBrains Mono for headings, Inter for body. All cards and interactive elements SHALL use 2px solid charcoal borders and hard offset shadows on hover.

#### Scenario: Blog uses portfolio design system
- **WHEN** viewing blog pages
- **THEN** colors, typography, borders, and shadows SHALL match the portfolio design system
