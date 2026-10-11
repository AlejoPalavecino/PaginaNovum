# Hero reference layout

## Objective
Match the user-supplied hero mockup with live, accessible HTML while preserving the current navbar exactly.

## Scope and constraints
- Use the existing clean workshop photograph, not the screenshot containing baked-in UI.
- Preserve approved Spanish editorial copy, CTA targets, contact configuration and all other sections.
- Preserve current navbar markup, styles and behavior byte-for-byte against the dirty worktree baseline.
- Adapt desktop composition and provide readable mobile layout with visible photographic parts and no horizontal overflow.
- No new imagery, backend, contact claims, publication or remote operations.

## Delivery
- Branch: `codex/hero-supplied-background`.
- User explicitly approved local implementation and verification without a commit to avoid mixing prior changes.
- No push or PR authorized. Review mode remains user-owned and unchanged.
- Strategy: ask-on-risk; forecast 220–350 authored changed lines for this task delta, excluding existing work.
- Engram mirror pending: host session registration unavailable.

## Tasks
- [ ] HRL-01 — Recreate the hero composition and verify preservation.
  - Route: delegated direct; trigger: HTML/CSS/test changes and reading in preparation for writing.
  - Acceptance: sentence-case oversized heading, white/orange emphasis, rectangular CTAs, lightweight technical labels aligned with the photograph, uncluttered benefits, current navbar unchanged.
  - Checks: regression RED → GREEN where deterministic; `node --test tests/content.test.js`; `npm test`; isolated production build; runtime inspection at 320, 375, 667×375, 992 and 1440px including overflow and navbar clearance.
  - Pure photographic fidelity has no deterministic RED; use screenshot inspection rather than pretending source tests prove visual acceptance.
  - Known release constraint: unconfirmed contact email; no publication or contact edits authorized.
  - Commit: omitted by explicit user authorization for this candidate.

## Progress
- Explorer confirmed a clean workshop JPG and existing matching hero copy; screenshot must not be embedded as background.
- Existing uncommitted work spans eight tracked files and additional untracked assets; snapshot current bytes before editing and do not stage them.
- CodeGraph initialized per project rules; JavaScript indexed, HTML/CSS require bounded filesystem inspection.

## Next step
HRL-02 ordinary verification completed: parent visually checked the three benefit icons at 1440px and 375px; no clipping or overflow. Independent verifier confirmed valid SVG geometry and all HTML bytes outside the three authorized SVG blocks unchanged; focused tests 16/16. Writer full tests 23/23. Screenshot detail saved as `C:/Users/alejo/.codex/visualizations/2026/10/10/01a126fb-f496-7201-87f7-50ebf2255cc7/hero-icons.jpg`. No commit. Native review exception remains unresolved; no approval claimed.

Ordinary implementation and verification are complete. Independent verifier found no blocking issues and reran `npm test`: 21 passed. Parent spot check reran content tests: 14 passed; current navbar hashes match the baseline. Arrow animation was removed; reduced-motion transition suppression remains.

Native review is pending, not approved: assessment returned high/unassessable because the worktree contains pre-existing untracked files. Selectorless STATUS requested an explicit untracked inventory selection and its workspace projection includes all eight inherited tracked modifications, not this isolated hero delta. No START, consent, candidate freeze or reviewer capture was performed; review mode remains on. Obtain an explicit candidate-scoped review exception or isolate prior work with user authorization; do not silently review or commit unrelated changes.

Desktop screenshot: `C:/Users/alejo/.codex/visualizations/2026/10/10/01a126fb-f496-7201-87f7-50ebf2255cc7/hero-desktop.jpg`.

## Writer verification (2026-10-10)
- Implementation ready; HRL-01 remains unchecked pending independent runtime inspection and any applicable native review.
- Reused the clean JPG and live HTML; no image, navbar, contact, JavaScript or other-section changes.
- Refactored hero CSS into one coherent desktop/mobile component: sentence-case heading, rectangular actions, lightweight callouts, full-width photographic mobile stage and reduced-motion transitions.
- Deterministic RED: `node --test tests/content.test.js` produced 12 passing / 2 failing tests before CSS implementation (headline/action styling and mobile photographic structure).
- GREEN: same command produced 14 passing / 0 failing tests; `npm test` produced 21 passing / 0 failing tests.
- Isolated build passed: `npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-hero-build-08e5c680-3e10-403d-8d58-282b62d1fa18`. Vite warned that the external output directory would not be emptied; it was unique and no cleanup override was used.
- Full `index.html` bytes are identical to the pre-edit snapshot (SHA-256 `5992a0bd482969dd1597b25c081b01c831c97490c854d572e1977f36f21fca23`), proving unchanged navbar markup and all other sections.
- Header CSS bytes are identical to baseline (SHA-256 `561f382b256b46f6bdc4c1cf46e2a5e185440e31c62fca7763d66de0edf0190c`).
- Snapshot: `C:\Users\alejo\AppData\Local\Temp\novum-hero-baseline-66072c25-c8c5-4f45-b5ee-8bf201dfdef2`.
- Source/test delta versus snapshot: hero CSS +137/-336; tests +43/-0; 516 authored lines before task-document evidence. Higher than forecast because obsolete mobile frosted cards and animation rules were removed rather than preserved beneath overrides. The 400-line figure is advisory; no commit or publication is authorized.
- Cascade discovery: `section[id]` global spacing has greater specificity than a single component class. Hero spacing uses `#inicio.section-hero` to stay local and effective without changing shared layout.
- Runtime screenshots, CTA interaction, overflow, visible photographic parts and navbar clearance remain pending parent browser inspection at 320, 375, 667×375, 992 and 1440px. Source checks do not prove visual acceptance.
- `npm run check:release` was not rerun: documented unconfirmed contact email remains outside scope, and no publication is requested.
- No staging, commit, push or review-mode change performed. Engram mirror remains pending because host session registration is unavailable.

### Final writer and independent visual readback
- Parent inspected responsive browser layouts at 320, 375, 667×375, 992 and 1440px. Reported no horizontal overflow (`scrollWidth <= innerWidth`), no navbar/copy overlap and discernible photographed parts. At 667×375, the stacked photographic stage requires scrolling, as intended.
- Parent initially found unreadably small mobile callouts; the final CSS establishes a 12px floor for both mobile title and body, widens the problem annotation and repositions leaders. Parent's fresh 320px screenshot confirmed readable labels within the viewport and visible parts.
- Final source checks after the mobile correction: `node --test tests/content.test.js` 14/14; `npm test` 21/21; `npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-hero-build-mobile-66072c25` passed. No dependency install or production `dist` mutation occurred.
- Visual observations are human-agent browser readback, not automated screenshot assertions or measured WCAG AA contrast certification.
- Source/test delta is 516 authored changed lines, excluding task-document evidence. HRL-01 remains unchecked pending the parent's applicable review handling. Commit remains omitted by explicit user request.

## HRL-02 — Refine hero benefit SVG icons
- [ ] Replace only the three benefit SVGs with a coherent outlined gear, lightning bolt and ascending chart.
- Authorized scope: those SVG blocks in `index.html`, focused regression tests and this task document. Keep all labels, layout, photograph, navbar and other sections unchanged.
- Route: delegated direct; bounded existing markup refinement. No asset generation, dependency, CSS or animation change.
- Checks: deterministic icon structure RED → GREEN; `node --test tests/content.test.js`; `npm test`; byte preservation outside the three SVG blocks; parent mounted browser inspection for visual quality.
- Commit omitted under the current user-authorized local workflow. Formal review remains pending parent handling; review mode is unchanged.
- Engram mirror remains pending because host session registration is unavailable.

### HRL-02 writer evidence
- Replaced the malformed gear outline with a balanced eight-tooth gear, refined the lightning bolt and corrected the chart into ascending bars with a baseline.
- All three SVGs use a 24-unit viewBox, currentColor, rounded caps/joins and 1.75px non-scaling outlines; explicit `focusable="false"` keeps them decorative under existing aria-hidden wrappers.
- Regression RED: 15 passed / 1 failed before source edits (consistent icon system). GREEN: `node --test tests/content.test.js` 16/16; `npm test` 23/23.
- Preservation check stripped only the three SVG blocks from before/after index snapshots and confirmed all remaining bytes identical. Navbar markup SHA-256 `4f43973e3b316538219a7edc64440eeff21e27829e27533c0861f809ca5f200d` unchanged; header CSS SHA-256 `561f382b256b46f6bdc4c1cf46e2a5e185440e31c62fca7763d66de0edf0190c` unchanged.
- Baseline snapshot: `C:\Users\alejo\AppData\Local\Temp\novum-benefit-icons-baseline-3cee20ff-9262-40b2-b17c-1ee599408cc8`.
- Task source/test delta: index +7/-9; tests +24/-0 = 40 authored changed lines, excluding this task-document evidence.
- Build not rerun: no runtime wiring, CSS or dependencies changed; parent mounted browser inspection is the proportional visual check and remains pending. HRL-02 remains unchecked until that inspection/review handling.
- No staging, commit, push, publication or native review operation performed.

## Authorized section delivery update
- Owner accepted oversized coherent section commits (exception-ok), no pull requests, feature branch only; this supersedes earlier local no-commit delivery constraints. Hero/navigation is the first work unit; native review remains parent-owned before subsequent sector/contact/release commits.
