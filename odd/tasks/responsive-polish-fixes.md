# Responsive polish fixes

## Objective and authorization
Correct the two verified responsive issues while preserving current visual design. Republish only codex/hero-supplied-background using authorized GitHub CLI to AlejoPalavecino/PaginaNovum; no main changes or PRs. Preserve all unrelated dirty trackers and untracked exports.

## Work units
- [x] RP-01: Bound mobile menu to available viewport height and enable internal scrolling, preserving navbar shape, focus, Escape and body lock. Regression proof for667x375. Route delegated direct: CSS plus tests; rollback menu CSS/tests only.
- [ ] RP-02: Expose compact persistent contact labels on narrow layouts without smaller text or enlarged desktop fields. Preserve Spanish content/associated labels/current form functionality. Route delegated direct: markup/CSS/tests; rollback label-specific changes only.
- [ ] RP-03: Verify320x640,375x812,667x375,768x1024,992x768,1440x900 visual spacing, no overflow/clipping/overlap and menu access. Check applicable native slices, push and deploy exact branch, verify unchanged main and final public URL.

## Checks and delivery
Observe meaningful deterministic RED→GREEN where tests apply; CSS geometry requires browser proof rather than source assertions alone. npm test, npm run check:release, unique external production build and git diff --check. No dependency/workflow changes. Conventional work-unit commits per fix with tests. Forecast under400 authored lines; owner exception-ok applies only for coherent oversize. RDD on, prior reviewed boundary8772163; newer medium slice pending underbudget. Client URL https://alejopalavecino.github.io/PaginaNovum/. Six-view browser audit required before declaring done; record limitations honestly.


## Writer ordinary proof
### RP-01
- Mobile menu remains below the unchanged 54px header: available max-height is 100vh minus 84px with 100dvh enhancement (10px top + 54px header + 10px gap + 10px lower clearance). Internal overflow-y auto, border-box sizing and nonshrinking nav-list/CTA preserve reachable content while body lock remains unchanged.
- Structural RED node --test tests/content.test.js: 29 passing / 1 failing before CSS. GREEN 30/30 after CSS. No navbar markup/runtime/focus/Escape edits. Actual 667x375 geometry remains parent-browser proof.
### RP-02
- Original associated labels become static persistent 14px labels at <=575px, with normal wrapping, visible overflow and no clipping. Optional/required meaning remains unchanged. Controls remain 16px and shells 56px; desktop hidden-label/reference presentation is unchanged. No HTML/runtime edit required.
- Structural RED 30 passing / 1 failing before narrow-label rule. First combined run exposed the older overly broad assertion forbidding width:auto anywhere in contact CSS; scoped that assertion to the copy-button rule, preserving its intended guarantee while allowing visible labels to size naturally. Final content GREEN 31/31.
### Final checks and boundaries
- npm test 52/52, no failures/skips; npm run check:release exit 0; git diff --check exit 0. Production build passed: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-responsive-polish-final-build-af2ef3a8-070d-4c5f-b9d0-442b0eaf9943. Unique outside-root warning only; no dependencies/install/dist mutation.
- Upstream CodeGraph status succeeded and reported current index before bounded known CSS/markup reads.
- Changed source/test paths: header.css +8/-0, cta.css +19/-0, content.test.js +28/-1 (56 authored lines excluding task). Only label/menu CSS and relevant regression expectations changed.
- Suggested boundaries: RP-01 mobile menu CSS plus its regression; RP-02 narrow label CSS plus persistent-label test and copy-rule assertion narrowing. Task proof accompanies each.
- Six-viewport visual acceptance/RP-03 and publication remain pending parent; source assertions do not certify geometry. No staging, commit, remote or native review action. Unrelated dirty trackers/exports preserved; Engram mirror pending.

## RP-01 independent browser/verification evidence
- Parent six-viewport audit: 667x375 open menu y65–356, internal scroll 0→146; final actions keyboard-visible and Escape restored toggle focus.
- Parent independent full check 52 tests/release/build passed; contact spotcheck 10/10 passed. Other representatives clean, but not every section at every size was exhaustively inspected.
- This unit commits menu CSS and its single regression only; labels and unrelated tracking remain outside candidate.

## RP-01 selective candidate proof
- Isolated index tree npm test 51/51, release check exit 0 and build successful: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-menu-unit-build-1a8150a0-a3db-4466-ace5-6f781a196e4f. Index archive reused existing node_modules junction without install; staged/worktree diff-check passed.
- Only header CSS, menu regression and this tracker staged. RP-02 label CSS/test/copy-rule assertion remain unstaged; no remote/native review operation.
