## Development

When starting the dev server, use background mode:

```
bun run dev --background
```

Manage the background server with `bun run dev stop`, `bun run dev status`, and `bun run dev logs` (or corresponding background commands).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Engineering & UI/UX Guidelines

### GSAP & View Transitions
- **Never use `gsap.from()` with `autoAlpha: 0` or `opacity: 0`** on page content in Astro pages with `<ClientRouter />`. It causes permanent faded or invisible elements on revisit.
- **Always use `gsap.fromTo()`** with explicit start and end states, and always include `clearProps: 'all'` on completion.
- **Do not split titles into `<span>` wrappers via JS runtime**. Keep semantic `<h1>` DOM intact.

### Astro JSX Syntax
- Never place HTML comments (`<!-- ... -->`) inside JSX expressions (`{ condition && (...) }` or ternary `{ cond ? (...) : (...) }`). Use `{/* ... */}` or omit them.

### Card Grids & Spacing
- Homepage 3-card sections (`ProjectsSection` & `BlogSection`) must maintain a synchronized 1-row layout on desktop: `grid-template-columns: repeat(3, 1fr)`.
- Keep cards compact (`min-height: 300px`, padding `1.5rem`). Never use `justify-content: center` in `.card-body` as it stretches cards into vertical monoliths with empty voids.
- Ensure sections have generous breathing room: `.section-label` must have `margin-bottom: var(--space-3xl)`.

### Empty States
- Always handle empty content collections (`projects.length === 0`, `posts.length === 0`) with elegant, user-friendly empty state cards linking to active pages.

