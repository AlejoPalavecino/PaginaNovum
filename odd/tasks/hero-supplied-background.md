# Supplied hero background

Integrate the user-supplied industrial photograph as the hero backdrop without duplicating the parts already pictured, while preserving the approved Spanish copy and CTA behavior.

## Scope and constraints

- Use the supplied 1672 x 941 image; preserve an identical PNG and optionally encode a WebP variant without cropping or retouching.
- Keep the existing headline, description, benefits, links, consultation attributes, other sections, and old assets.
- Remove the separate foreground part/CAD composition from this hero only.
- Desktop: legible left copy and an unobstructed right photographic area.
- Mobile: proportional lower photographic area rather than a tall crop that loses the pictured parts.
- Correct hero/header spacing locally, without modifying global layout or navigation.
- Preserve pre-existing tracked and untracked work.

## Delivery policy

- Branch: `codex/hero-supplied-background`.
- User explicitly approved implementation and desktop/mobile verification **without a commit or formal review** to avoid mixing prior changes.
- This exception applies only to this integration; the global review setting remains unchanged.
- No push, pull request, publication, or deployment is authorized.
- Forecast: approximately 100–180 authored changed lines, excluding binary assets; actual task delta will be recorded against a pre-edit snapshot.

## Task

- [ ] **HERO-01 — Integrate and verify the supplied photograph.**
  - Route: delegated direct; trigger: non-trivial HTML, component CSS, regression tests, and manifest changes.
  - Test first: observe the new hero regression fail, implement, then observe it pass.
  - Acceptance: supplied PNG/WebP references resolve; old foreground assets are absent from this hero; approved copy and both CTAs remain intact; no header overlap or horizontal overflow; both pictured parts remain discernible at 320, 375, 667 x 375, 992, and 1440 px.
  - Checks: `node --test tests/content.test.js`, `npm test`, isolated temporary production build, structural/source preservation, and mounted browser inspection.
  - Known failure: `npm run check:release` remains blocked by the unconfirmed contact email; contact changes are out of scope.
  - Commit: explicitly omitted by the user for this candidate.
  - Formal review: explicitly omitted by the user; ordinary verification remains required.

## Progress and evidence

- Planning complete; source implementation not started.
- Initial worktree contains eight tracked modifications and six untracked entries inherited from earlier work.
- Engram mirror: pending initial synchronization.

## Allowed edit surfaces

`index.html`, `src/styles/components/hero.css`, `assets-manifest.md`, `tests/content.test.js`, `assets/images/backgrounds/hero-supplied-workshop.png`, `assets/images/backgrounds/hero-supplied-workshop.webp`, and this task document.

## Next step

Delegate the bounded writer, then independently verify the change and record observed acceptance evidence.

## Authorized section delivery update
- Owner accepted oversized coherent section commits (exception-ok), no pull requests, feature branch only; this supersedes earlier local no-commit delivery constraints. Hero/navigation is the first work unit; native review remains parent-owned before subsequent sector/contact/release commits.
