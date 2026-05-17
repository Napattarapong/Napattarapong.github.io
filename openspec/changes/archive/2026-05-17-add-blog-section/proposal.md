## Why

The portfolio needs a blog section to share tutorials, project case studies, and technical notes about ML, NLP, computer vision, and the tools I use. A blog establishes credibility, documents my learning, and gives visitors a reason to return.

## What Changes

- Add a "Blog" link to the navigation bar between Projects and Research
- Create a blog list page displaying post cards with date, tags, title, excerpt, and read time
- Create a blog detail page with full article typography (headings, code blocks, blockquotes, lists)
- Add a `blog/` directory with markdown posts rendered as HTML
- Wire the "Blog" nav link to the blog list page
- Add a back-to-list link from detail pages

## Capabilities

### New Capabilities
- `blog-navigation`: Add "Blog" link to main navigation bar between Projects and Research
- `blog-list`: Blog post listing page with date-block cards, tag pills, excerpts, and click-to-read
- `blog-detail`: Individual blog post page with full typography (headings, code, blockquotes, lists)
- `blog-layout`: Shared blog layout structure consistent with the Neo-Brutalist portfolio design system

### Modified Capabilities
- None — this is additive, no existing specs are changing

## Impact

- `index.html`: Navigation bar updated with new "Blog" link
- New file: `blog/index.html` — blog list page
- New file: `blog/post.html` — blog detail page template
- New files: `blog/*.md` — markdown blog posts
- `css/styles.css`: Minor additions for blog-specific styles (date block, blog card, post typography)
- No breaking changes to existing layout or functionality
