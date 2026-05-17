## ADDED Requirements

### Requirement: Resume download
The page SHALL provide two download links for the resume PDF (`NapattarapongCV_intern.pdf`): one in the hero section labeled "Download Resume" and one in the footer labeled "Resume (PDF)". Both SHALL use the `download` attribute to trigger a file download rather than navigating to the PDF.

#### Scenario: Hero resume button downloads PDF
- **WHEN** clicking "Download Resume" in the hero
- **THEN** the browser SHALL download NapattarapongCV_intern.pdf

#### Scenario: Footer resume link downloads PDF
- **WHEN** clicking "Resume (PDF)" in the footer
- **THEN** the browser SHALL download NapattarapongCV_intern.pdf

#### Scenario: Download attribute is present
- **WHEN** inspecting both resume links
- **THEN** both SHALL have the download attribute set
