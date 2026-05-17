## Context

The portfolio currently has 5 nav links: About, Skills, Projects, Research. A "Blog" link needs to be added between Projects and Research to point to the new blog list page. The existing navigation bar uses anchor links (`href="#section-id"`), but the blog will be a separate page, so this link will use a regular URL path (`href="blog/"`).

## Goals / Non-Goals

**Goals:**
- Add a "Blog" link to the navigation bar between Projects and Research
- Style the active Blog link consistently with other nav links
- Ensure the Blog link works when clicked from any page

**Non-Goals:**
- No changes to existing nav link behavior
- No dropdown/submenu for the blog link
- No mobile hamburger menu changes

## Decisions

1. **Regular link over anchor**: Unlike the other nav links which use `#section-id` anchors, the Blog link will use `href="blog/"` because it's a separate page. This is consistent with how external links work in the nav.

2. **Position between Projects and Research**: This maintains a logical order (About → Skills → Projects → Blog → Research → Contact) and keeps the nav balanced.

3. **No active state styling needed**: Since the blog is a separate page, the nav will re-render naturally. On the blog page, the Blog link can be styled as active.

## Risks / Trade-offs

- **[Page navigation mismatch]** If users click Blog, they leave the single-page context. → Mitigation: Consistent header/nav on blog page provides familiar navigation back.
