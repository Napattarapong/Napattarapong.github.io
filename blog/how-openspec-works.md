---
title: "How I Used OpenSpec to Build My Portfolio — A Beginner's Guide"
date: 2026-05-17
tags: ["openspec", "workflow", "tools", "productivity"]
---

## What is OpenSpec?

OpenSpec is a **structured workflow system** that helps you break down a project into clear stages before writing any code. Instead of jumping straight into coding and figuring things out as you go, OpenSpec forces you to think through **what** you're building, **why**, and **how** — then gives you a checklist to execute.

Think of it as a **recipe for building software**. You wouldn't bake a cake without knowing the ingredients and steps — so why code without a plan?

---

## The 4 Artifacts of Every Change

Every feature or fix in OpenSpec is called a **change**. Each change produces 4 artifacts in order:

```
Proposal → Specs → Design → Tasks
```

Let me walk through each one using my portfolio project as a real example.

---

### 1. Proposal — The "Why"

The proposal answers: **What problem are we solving? Why now?**

For my portfolio, the proposal said:

> *"I need a personal portfolio landing page to showcase my data science and ML engineering skills to potential employers."*

It also listed what capabilities would be created:
- `portfolio-layout` — the page structure
- `brutalist-design-system` — the CSS design tokens
- `contact-form` — form with validation
- `resume-download` — PDF download links
- `scroll-reveal-animations` — entrance animations

**No technical details here.** Just the goal and scope.

---

### 2. Specs — The "What"

Specs define **exactly what the system should do**. Each capability from the proposal gets its own spec file with requirements and testable scenarios.

Example from the `contact-form` spec:

```
### Requirement: Form validation
When the Send Message button is clicked, the form SHALL validate
that all three fields are non-empty.

#### Scenario: Empty form shows error
- WHEN clicking Send Message with empty fields
- THEN an alert SHALL display "Please fill in all fields."
```

Every requirement has a **scenario** written in WHEN/THEN format. These are essentially test cases before you write any code.

---

### 3. Design — The "How"

The design doc covers **technical decisions and architecture**. This is where you answer questions like:

- Should we use a framework? → **No, pure HTML/CSS/JS is simpler for a static page**
- What font should we use? → **JetBrains Mono as a stand-in for the paid Aeonik Mono**
- How do we do animations? → **IntersectionObserver, not a library**

It also lists risks and trade-offs:

> *"The contact form is client-side only. Messages aren't actually sent. Mitigation: Formspree can be added later."*

---

### 4. Tasks — The "Do"

Finally, the task list breaks everything into **checkboxes**. Our portfolio had 49 tasks across 8 groups:

```
## 1. Project Setup
- [x] 1.1 Create project directory structure
- [x] 1.2 Create index.html with boilerplate
- [x] 1.3 Create styles.css
...

## 2. Design System Tokens
- [x] 2.1 Define CSS reset and base styles
- [x] 2.2 Define layout utilities
...
```

Each task is small enough to complete in one sitting. You check them off as you go.

---

## The Full Workflow in Practice

Here's exactly what we did:

```
1. openspec new change "portfolio-landing-page"
   → Creates a scaffold folder

2. Create proposal.md
   → What & why

3. Create 6 spec files
   → One for each capability

4. Create design.md
   → Technical decisions

5. Create tasks.md with 49 tasks
   → The implementation checklist

6. Apply (implement)
   → Write the actual code, check off tasks

7. Verify
   → Check that implementation matches specs

8. Archive
   → Move to openspec/changes/archive/
```

---

## Why This Matters

Before OpenSpec, I would have just opened a code editor and started typing. The result? Probably messy code, forgotten features, and no documentation of what I built.

With OpenSpec:

- **I had a plan before I wrote a single line of code**
- **Every feature was documented** — if I come back in 6 months, I know exactly what I built and why
- **The specs double as test cases** — I can verify my code against them
- **Changes are archived** — I can look back at old proposals for reference

---

## The Best Part: It Scales

For a simple portfolio, the workflow might feel like overkill. But the same process works for:

- Adding a blog section (my next change!)
- Implementing dark mode
- Adding a contact form backend
- Migrating to a framework

Each feature gets its own change, its own proposal, its own tasks. Nothing gets lost.

---

## Try It Yourself

```bash
# Install openspec (if you haven't)
# Create a new change
openspec new change "your-feature-name"

# Start with a proposal
# Then specs, design, tasks
# Then implement
```

The hardest part is writing the proposal. Everything else flows from it.
