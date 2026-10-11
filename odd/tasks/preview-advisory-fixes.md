# Preview advisory fixes

## Objective and authorization
Fix the sector reveal threshold and stale asynchronous clipboard recovery, then republish codex/hero-supplied-background using the authorized GitHub CLI to AlejoPalavecino/PaginaNovum. No main changes or PRs; preserve unrelated dirty documentation and untracked exports.

## Work units
- [x] AF-01: Reveal tall sectors at any positive intersection; preserve reduced-motion and unsupported-observer fallback. Add deterministic regression tests. Route: delegated direct (behavior plus tests). Rollback: sector observer and its tests only.
- [x] AF-02: Invalidate stale clipboard completion after input/service edits or newer copy attempts; preserve current-copy feedback and selectable failure recovery. Add deferred promise regressions. Route: delegated direct (behavior plus tests). Rollback: clipboard guard and its tests only.
- [ ] AF-03: Review applicable committed slices, push and dispatch exact branch, verify successful deployed HEAD and unchanged main, deliver link.

## Verification and delivery
Observe meaningful RED before each behavior fix, then GREEN and existing tests. Run npm test, npm run check:release, isolated npm run build, git diff --check. No dependencies, workflow changes, or broadened publication paths. Conventional commits per fix with tests and evidence. Forecast under400 authored lines; existing owner exception-ok accepted if coherent fix exceeds heuristic. RDD is on; candidate consent remains separate. First reviewed boundary for new slice: 8772163aeadf4119980a4dbbab841a517df3e76b (96f6b2f portable test command was medium under_budget). Public URL https://alejopalavecino.github.io/PaginaNovum/.


## Writer implementation proof
### AF-01
- CodeGraph upstream status succeeded: index current, 14 files; bounded known controller/test reads followed. Whole-section threshold changed from 0.15 to 0, retaining entry.isIntersecting, root margin, reduced-motion and absent-observer fallbacks.
- Observed RED: node --test tests/content.test.js 28 passing / 1 failing for a 0.005 intersection ratio in a short viewport. After controller change GREEN 29/29; existing progressive-enhancement/fallback regressions remain green.
### AF-02
- Every field/service email refresh invalidates pending copy UI authority; each copy attempt takes a newer revision. Async success/failure checks both request revision and current generated text before feedback, recovery display or focus/select. Native clipboard writes cannot be cancelled, but stale completions cannot mutate UI.
- Observed RED: node --test tests/contact-ui.test.js 7 passing / 2 failing before guard implementation. GREEN 9/9 afterward; added final pending-newer-order coverage. Deferred tests exercise all five field edits, service change/reset, both promise outcomes and older/newer completion order. Current immediate success and unavailable/rejected clipboard recovery remain covered.
### Final ordinary checks
- npm test: 50/50 passing, no failures/skips; npm run check:release: exit 0; git diff --check: exit 0 (line-ending advisories only).
- Build passed: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-advisory-fixes-final-build-9c812249-ec10-41d1-a4c7-d2b92ab11591. Unique outside-root warning only; no dist mutation, installation or dependency changes.
- Source/test delta: 91 authored lines: sector controller +2/-1, content test +15/-0, contact main +8/-0, contact UI tests +65/-0. Task evidence excluded.
- Suggested coherent boundaries: AF-01 controller plus content regression; AF-02 revision guard plus deferred UI regressions, with corresponding task proof in each. No staging/commit/native review/remote action performed.
- Unrelated dirty client-preview-publication.md and all untracked historical exports preserved. Parent mounted verification/review/publication remain pending; no claim that AF-03 is complete. Engram mirror pending.

## Independent verification
- Separate read-only verifier observed 50/50 tests, release exit0 and isolated build success; no actionable blockers. Parent spot check contact UI 10/10. Native clipboard writes cannot be cancelled; only stale UI effects are invalidated.

## AF-01 commit boundary
- affe4e67a37fd4204ca827e28e51935f376f63be: fix(sectors): reveal tall sections on viewport entry. Native committed assessment from8772163: medium,66lines, under_budget, review_due false after explicit exclusion of historical untracked exports. No approval receipt claimed.
