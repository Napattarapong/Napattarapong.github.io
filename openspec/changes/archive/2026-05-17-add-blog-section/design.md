## Context

This change adds a blog section to the existing Neo-Brutalist portfolio site. The blog will have a list page (`blog/index.html`) and individual post pages (`blog/post-name.html`). The wireframe has been approved. The existing `blog/how-openspec-works.md` file serves as the first blog post.

## Goals / Non-Goals

**Goals:**
- Add a blog list page at `blog/index.html` with post cards
- Convert the existing markdown post to an HTML page
- Add Blog link to the main navigation
- Apply the existing design system (no new design tokens needed)
- Keep the site fully static (no build tools)

**Non-Goals:**
- No markdown-to-HTML renderer — posts will be hand-written as HTML
- No CMS or database
- No RSS feed (future enhancement)
- No tag filtering (future enhancement)

## Decisions

1. **Hand-written HTML over markdown renderer**: The site is fully static with no build step. Adding a markdown parser would require Node.js or a client-side library. Hand-writing post HTML is simpler for a small number of posts and keeps the zero-dependency approach intact.

2. **Separate HTML files per post**: Each post gets its own HTML file (e.g., `blog/how-openspec-works.html`). This keeps URLs clean (`blog/how-openspec-works`) and allows each page to have its own meta tags for SEO.

3. **Manual post list updates**: Adding a new post means creating the HTML file and adding a card to `blog/index.html`. For a personal blog with infrequent posts, this is simpler than a dynamic system.

4. **Reuse existing CSS**: Blog-specific styles (date block, blog card, post typography) share the same Neo-Brutalist tokens as the main site. No new CSS file — styles are added to the existing `css/styles.css`.

## Risks / Trade-offs

- **[Manual workflow]** Adding a post requires editing two files (new HTML + list page). → Mitigation: Low frequency of posts makes this acceptable. A future change could add automation.
- **[No markdown]** Writing posts in HTML is more verbose than markdown. → Mitigation: The blog post template provides reusable structure; authors only fill in content sections.
