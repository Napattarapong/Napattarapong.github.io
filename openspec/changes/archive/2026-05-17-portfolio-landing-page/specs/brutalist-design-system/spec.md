## ADDED Requirements

### Requirement: Color palette
The page SHALL use the following color palette extracted from the MotherDuck design system:
- Canvas background: #F4EFEA (cream)
- Ink (text and borders): #383838 (charcoal)
- Surface (cards): #FFFFFF (white)
- Primary accent (CTAs): #6FC2FF (sky blue)
- Highlight (section backgrounds): #FFDE00 (sun yellow)
- Announcement: #16AA98 (teal)
- Attention (sticker CTAs): #FF7169 (coral)
- Brand mark (logo accent): #FF9538 (orange)
- Dark surfaces (footer): #383838 (charcoal)

#### Scenario: Colors match specification
- **WHEN** inspecting CSS values for background, text, and border colors
- **THEN** they SHALL match the hex values defined in the requirements

#### Scenario: Text contrast passes WCAG AA
- **WHEN** computing contrast ratios
- **THEN** primary text (#383838) on cream (#F4EFEA) and white (#FFFFFF) SHALL exceed 4.5:1

### Requirement: Typography scale
The page SHALL use the following type scale:
- H1: JetBrains Mono, 56px, 400 weight, 1.2 line-height, 1.12px letter-spacing, uppercase
- H2 (section): JetBrains Mono, 32px, 400 weight, 1.4 line-height
- H3 (card): JetBrains Mono, 18px, 400 weight
- Eyebrow: Inter, 16px, 600 weight, 0.48px letter-spacing, uppercase
- Lead: Inter, 20px, 300 weight, 1.4 line-height
- Body: Inter, 16px, 400 weight, 1.5 line-height
- Caption: Inter, 12px, 300 weight

#### Scenario: Typography scales correctly
- **WHEN** rendering each heading and text level
- **THEN** font-family, size, weight, line-height, and letter-spacing SHALL match the specification

#### Scenario: Font loading
- **WHEN** the page loads
- **THEN** Inter and JetBrains Mono SHALL be loaded from Google Fonts

### Requirement: Spacing system
Spacing SHALL use a 4px grid base. Section vertical padding SHALL be 80px (desktop) / 48px (mobile). Card grid gaps SHALL be 40px. Card internal padding SHALL be 24px. Button internal padding SHALL be 16px 24px.

#### Scenario: Spacing is consistent
- **WHEN** measuring padding and gap values
- **THEN** they SHALL be multiples of 4px and match the specified values

### Requirement: Border system
The dominant border style SHALL be 2px solid #383838 (charcoal). Primary CTAs and tabs SHALL use 3px solid #383838. Dividers between sections SHALL be 3px solid #383838. Border radius SHALL default to 0px (brutalist hard corners). A 2px radius SHALL be used for inputs and tags.

#### Scenario: Borders are correct
- **WHEN** inspecting card, button, and input borders
- **THEN** they SHALL be 2-3px solid #383838 with 0px radius

### Requirement: Shadow system
Shadows SHALL use brutalist hard offset shadows, not soft drop shadows. Card hover SHALL use `#383838 -6px 6px 0 0` (charcoal offset down-left). Button hover SHALL use `#383838 -3px 3px 0 0`. Active tab SHALL use `#FFDE00 -6px 6px 0 0` (yellow offset). Input focus SHALL use `rgba(111, 194, 255, 0.925) -3px 3px 0 0` (sky-blue offset).

#### Scenario: Shadow styles are correct
- **WHEN** hovering over cards, buttons, and tabs
- **THEN** the offset shadow SHALL appear with the correct color and position

#### Scenario: Soft shadows are absent
- **WHEN** inspecting all box-shadow properties
- **THEN** no soft drop shadows SHALL be present (no blur radius in box-shadow values)

### Requirement: Responsive breakpoints
The page SHALL use mobile-first CSS with breakpoints at:
- Small mobile: max-width 480px
- Tablet: min-width 728px
- Desktop: min-width 960px
- Wide desktop: min-width 1302px

#### Scenario: Mobile layout
- **WHEN** viewport is ≤768px
- **THEN** card grids SHALL be single column, H1 SHALL reduce to 32px, nav SHALL wrap

#### Scenario: Desktop layout
- **WHEN** viewport is ≥960px
- **THEN** card grids SHALL use 2-3 columns, H1 SHALL be 56px, nav SHALL be single row
