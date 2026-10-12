# Process line animation polish

## Outcome and authorization
Improve the orange timeline in Cómo trabajamos while preserving five-stage copy, cards, vertical axis, navbar, Hero, Sectores and contact. User authorized animation polish. Work stays on codex/hero-supplied-background; no main changes or PRs, no dependencies/framework/HTML changes.

## Evidence and approach
Current controller derives progress from section bounds and hardcoded node thresholds; axis/node positions differ across responsive layouts. CSS transform interpolation delays the visible line while node states update immediately. Keep existing native rAF/IntersectionObserver (no GSAP migration needed): measure real axis endpoints/node centers, drive transform and activation from one rendered value. Forward/reverse reflect scroll, no pinning, infinite glow/pulse or scrolljacking. Refresh geometry for resize/layout/fonts. Batch reads before writes. Keep all static content visible when animation unavailable or reduced-motion; support live preference changes and cleanup.

## Work units
- [x] PL-01: Replace fixed percentages with actual axis/node geometry and frame-coalesced progression; remove competing line transition; progressive enhancement, reduced-motion/static fallback and disposal. Route delegated direct controller/CSS/tests; rollback these scoped changes only.
- [x] PL-02: Observe meaningful runtime VM RED→GREEN for unequal geometry, forward/reverse, resize, frame batching, missing observer, reduced preference changes and cleanup; verify55baseplusregressions, release, isolated build/diffcheck and actual desktop/mobile animation. Route delegated verification. Source assertions are not animation acceptance.
- [ ] PL-03: Coherent work-unit commit, applicable native assessment/review from last reviewed03699e3; verify exact candidate. No publication claim before successful authorized branch deployment and browser proof.

## Edit surfaces and checks
src/scripts/processTimeline.js; src/styles/components/process.css; tests/content.test.js; this task only. No main.js/HTML/config/package changes. Existing explicit test runner includes content suite. Forecast180–280authoredlines, advisory notcap; userexception-ok remains forcoherentoversize. Checks npmtest, npm run check:release, uniqueexternalbuild, git diff --check; browser1440/1024/768/390andshort667x375 forward/reverse/intermediate/final line-nodealignment and readablefallback. Preserve unrelateddirtytrackers/untrackedexports. Record failed/skippedchecks honestly and keep factual proof.


## Writer ordinary implementation proof
- PL-01 replaces section/fixed-percentage mapping with cached actual axis endpoints and measured node centers in document coordinates. A single frame computes progress at the existing75% viewport reading point and writes both exact scaleY and activation from the same tip. No interpolation/quantization, pinning or scroll interception.
- Geometry reads are batched before style/class writes and cached while scrolling. Window resize/load, timeline ResizeObserver, font readiness and observer re-entry refresh measurements. Events coalesce into one pending rAF; offscreen/disposed/reduced-motion paths cancel pending work.
- Default desktop cards, callouts and full line are static/visible; only process-motion-ready enables entrance hiding. Missing axis/node/observer, invalid or throwing geometry and reduced-motion fall back to full static content. Live preference changes restart/stop cleanly; returned cleanup removes listeners/observers and leaves readable content.
- Observed RED before source implementation: node --test tests/content.test.js34 passing /5 failing. GREEN after implementation and added font/disposal coverage: content40/40; final npm test61/61, no failures/skips. Runnable fixtures execute the actual controller with unequal section/axis/node rectangles, forward/reverse, resize/layout/fonts, frame coalescing, capability/error fallbacks, live preference changes and cleanup.
- npm run check:release exit0; git diff --check exit0. Build passed: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-process-polish-build-fba310d1-e32d-4acf-bf9f-54e1375a2583. Unique external-output warning only; no install/dependencies/dist changes.
- Source/test delta309 authored lines: controller+106/-77, processCSS+19/-7, tests+100/-0. Slightly above initialforecast due to lifecycle/static/error/font tests kept with the behavior, not code-golfed. Tracker excluded.
- HTML/main/Hero/header/Sectores/contact/footer source preservation verified against HEAD. Only three allowed source/test files and this tracker changed; unrelated trackers/exports retained. Upstream CodeGraph exploration provided current process controller before bounded CSS/markup reads.
- Parent notified for actual desktop/mobile animation, intermediate/final/resize/reverse proof. PL-01/02 implementation and ordinary checks observed, but checkboxes remain pending independent visual acceptance; PL-03 native/commit/publication entirely pending. No staging, commit, remote/native review operation. Engram mirror parent-owned.
- Preservation precision: HTML/main/header/Sectores buffers are exact HEAD matches. Hero/contact/footer CSS differ from Git blobs only in existing working-tree line endings; normalized contents match, and this task never writes those files. Do not interpret this as a new source delta or claim their raw buffers equal Git blobs.

## Narrow process-title safeguard
- Parent mounted geometry proof observed aligned line/node state: 320px progress0.67945/tip480 first three active; desktop1440 partial0.617→full1→reverse0.650 first three;390resize partial0.2 and remaining representative sizes checked. This is not FPS/flicker certification.
- Separate pre-existing finding: long Implementación heading exceeded its card at320px because the title had no emergency wrap. Owner-authorized section polish scope now includes mobile-only overflow-wrap:anywhere and hyphens:auto, preserving15pxfont, icons, copy and card layout. Not attributed to the animation change.
- Structural RED content40 passing/1 failing before CSS safeguard; GREEN41/41. Final npm test62/62, release check exit0, diff-check exit0. Build passed: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-process-title-wrap-build-01573687-345b-4848-9516-6461ef7d6f64.
- Parent320px glyph Range/card and node alignment recheck pending; no staging, commit, remote or native review operation.

## Parent independent functional acceptance
- Parent independent npm test62/62, release/build/diff-check passed. CUA inspected representative states at1440/1024/768/390/320/667; not every frame/section/size exhaustively certified.
- Desktop partial0.617 first three→full1 all five→reverse0.650 first three;390resize partial0.2. At320 settled before/after identical tip480/first three orange, last two gray, verified actual border colors. Title Range right249.52 stays inside card right282.61; ResizeObserver refreshed timeline height705 after wrapping.
- Worker own browser unavailable; parent mounted image/JSON evidence supplies independent visual proof. Reduced-motion/lifecycle cases VM-only; no FPS/rapid-scroll/no-flicker claims. PL-01/02 outcomes accepted; PL-03 native review/commit delivery/publication still separate pending.

## Exact work-unit candidate proof
- Isolated Git index archive npm test62/62, release check exit0 and production build successful: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-process-unit-build-34a34f55-dfaa-4a9f-a8e7-c4fcce7ccf47. Only existing dependency junction reused, no install or unstaged inputs.
- Staged/worktree diff-check passed; HTML/main/Hero/header/Sectores/contact/footer staged blob identities remain exact parent matches. Only controller/processCSS/content tests/this tracker included. Native review and publication remain parent-owned.
