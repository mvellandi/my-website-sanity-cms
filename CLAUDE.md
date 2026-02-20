# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sanity v5 CMS Studio for a personal portfolio website. Content types include projects (with dynamic tech-stack structure), articles, pages, toys, authors, and singleton settings. Integrates with a Next.js frontend at `localhost:3000` for article previews.

## Commands

```bash
pnpm run dev          # Start dev server
pnpm run build        # Production build
pnpm run deploy       # Deploy to Sanity Cloud (studioHost: vellandi)
pnpm run lint         # ESLint
pnpm run type-check   # TypeScript check (tsc --noEmit)
```

No test framework is configured.

## Architecture

### Schema Organization (`schemas/`)

Four categories, aggregated in `schemas/schemas.ts`:

- **`domains/`** — Document types: article, author, page, project, toy. Project has a subdirectory with `structure.ts`, `structureAspects.ts`, and `utilities.ts`.
- **`components/`** — Reusable object types: code, graphicFigure, graphicImage, headingRichText, outline, richText, textLink. Custom SVG icons in `icons.tsx`.
- **`categories/`** — 13 category document types (appFramework, authentication, cms, codeLanguage, etc.) defined in `categories.ts`. Each is a simple name-field document for tagging.
- **`settings/`** — 3 singleton documents: site, navigation, colors. Protected from unpublish/delete/duplicate via action filtering in `sanity.config.ts`.

### Key Patterns

- **Dynamic schema generation**: `structureAspects.ts` generates 13 `projectStructure_*` object types by mapping over the categories array. Each gets a reference field pointing to its corresponding category type.
- **Custom desk structure** (`deskStructure.tsx`): Groups categories and settings into collapsible sections. Adds iframe preview pane for articles. Filters out `media.tag` from main list.
- **Admin-only tools**: Vision plugin restricted to administrator role via `tools` function in config.
- **Validation utility**: `entriesUnique()` in `schemas/domains/project/utilities.ts` validates no duplicate entries in arrays (handles both references and plain values).

### Config

- **`sanity.config.ts`** — Project ID `nkdwfm1n`, dataset `production`. Plugins: `@sanity/vision`, `sanity-plugin-media` (image-only, excluded from file fields).
- **`tsconfig.json`** — Path alias `@/*` → `./*`. Target ES2020, module ESNext, bundler resolution, strict mode.
- **Prettier** — Configured in `package.json`: no semis, single quotes, no bracket spacing, 100 char width.

### Plugins

- `@sanity/vision` — GROQ query tool (admin-only)
- `sanity-plugin-media` — Media library (images only, filtered out of file asset sources)
- `sanity-plugin-prefixed-slug` — Slug generation with prefixes
- `plugins/codeInputConfig.ts` — Elixir CodeMirror language support (currently inactive/commented out)

## Pre-commit

Uses `pre-commit` framework with `trailing-whitespace` hook.
