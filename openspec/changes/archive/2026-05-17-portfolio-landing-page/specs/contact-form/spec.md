## ADDED Requirements

### Requirement: Contact form fields
The contact form SHALL contain three input fields: Name (text), Email (email), and Message (textarea). Each field SHALL have a placeholder attribute. Input styling SHALL follow the newsletter input pattern: 58px height, 2px solid #383838 border, 2px border-radius, rgba(248,248,247,0.7) background, Inter font.

#### Scenario: All form fields render
- **WHEN** viewing the contact section
- **THEN** three input fields SHALL be visible: Name, Email, and Message

#### Scenario: Input hover state
- **WHEN** hovering over any contact input
- **THEN** the border color SHALL change to #2BA5FF

#### Scenario: Input focus state
- **WHEN** focusing on any contact input
- **THEN** the border color SHALL change to #2BA5FF

### Requirement: Form validation
When the Send Message button is clicked, the form SHALL validate that all three fields are non-empty. If validation fails, an alert SHALL display "Please fill in all fields." If validation passes, an alert SHALL display "Thanks {name}! Your message has been sent. I'll get back to you at {email}." and all fields SHALL be cleared.

#### Scenario: Empty form shows error
- **WHEN** clicking Send Message with empty fields
- **THEN** an alert SHALL display "Please fill in all fields."

#### Scenario: Valid form shows success
- **WHEN** clicking Send Message with all fields filled
- **THEN** an alert SHALL display a thank-you message with the user's name and email

#### Scenario: Form clears after success
- **WHEN** a successful submission alert is dismissed
- **THEN** all form fields SHALL be empty
