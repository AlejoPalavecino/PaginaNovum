# Hero and sector SVG containment fixes

## Objective and authorization
Correct all three confirmed defects: wide-desktop hero orange title overflowing its safe copy column into the problem annotation/background focal piece; malformed maintenance wrench; clipped laboratory flask. Preserve navbar, background, approved text, layout intent and all other icons. Current authorized feature branch codex/hero-supplied-background; no main changes or PRs. Prior GitHub CLI publication authorization to AlejoPalavecino/PaginaNovum remains bounded to this branch.

## Tasks
- [x] HS-01: Size hero typography from available safe copy width, keep the two intended desktop title lines and responsive mobile layout. Do not clip/hide overflowing text. Regression structural proof plus browser geometry at1920 and320/375/667/768/992/1280/1440/1544. Route delegated direct CSS/tests. Rollback hero containment CSS/tests only.
- [ ] HS-02: Replace only wrench/flask SVG paths with clean continuous padded geometry inside24x24 including stroke. Preserve28pxsector icon size1.65stroke/orange wrappers. Add regressions and browser geometry/render inspection. Route delegated direct markup/tests. Rollback two paths/tests only.
- [ ] HS-03: Independently verify checks and visual proof, create coherent work-unit commits, apply native slice assessment, republish same branch and verify publicHEAD/main unchanged.

## Verification and constraints
Meaningful deterministic structural RED beforefixGREEN, but no claim geometry fromregexalone. npm test, releasecheck, uniqueisolatedbuild, diffcheck. Browser title actualglyphbound withincopycolumn andmargin beforecallout; inspect backgrounds/focalpiece manually. SVGcenterline/strokeboundswithinviewbox plusvisuallooks like wrench/flask. No rastergeneration/newlibrary/dependency/workflowchanges. Preserve unrelateddirtytrackers and untrackedexports. Forecastunder200 authoredlines; existing exception-ok ifcoherentoversize. Native RDDon previousreviewedboundary8772163, currentmediumslice243underbudget. Do not manufacture approval. Publicationlink https://alejopalavecino.github.io/PaginaNovum/.


## Writer ordinary proof
### HS-01
- Desktop only (>=992px): hero copy becomes an inline-size container; title uses min(10.3cqw, 4.375rem) with min(4.2vw, 4.25rem) fallback. This follows safe copy width rather than growing indefinitely with viewport width. Existing explicit break and orange nowrap keep two intended desktop lines; mobile rules/text/background/navbar unchanged. No clipping/hidden text introduced.
- RED node --test tests/content.test.js observed 31 passing / 1 failing before implementation; GREEN 32/32 afterward. Source assertions verify mechanism only; actual glyph/callout bounds remain parent browser proof.
### HS-02
- Only the maintenance wrench and laboratory flask path strings changed. Both use absolute closed padded outlines with Bezier/line controls inside 1.5–21 units; adding half the 1.65px stroke leaves them within the 24-unit viewBox. Existing 28px wrappers, colors and other icons unchanged. Reverse substitution reproduced the entire pre-edit HTML exactly.
- RED content runner 32 passing / 1 failing before paths; GREEN 33/33 afterward. Regressions inspect closed absolute padded control hulls without arc-extrema ambiguity. Actual visual recognition/stroke inspection remains parent-owned.
### Final ordinary checks
- npm test 54/54, no failures/skips; npm run check:release exit 0; git diff --check exit 0. Build passed: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-hero-svg-build-67d93d2d-f77a-4513-a73d-f62536648658. Unique outside-root warning only; no dependencies/install/dist mutation.
- Upstream CodeGraph status succeeded and reported index current before bounded known source reads.
- Source/test delta 36 authored lines: hero CSS +9/-0; two HTML paths +2/-2; content regressions +23/-0. Suggested coherent boundaries: hero typography CSS/regression; wrench/flask paths plus SVG containment regression. Tracker evidence accompanies each.
- Other dirty trackers and untracked exports preserved. No staging, commit, remote or native review operation. Parent independent geometry/native/publication checks and HS-03 remain pending. Engram mirror pending.

## HS-01 independent geometry proof
- Parent DOM Range inspection at nine sizes confirmed orange glyphs within the copy column: desktop remaining width 13.4–18.4px, margin before callout 26.5–54.9px including 1920x1080. Parent independent suite 54/54, release/build/diff-check passed; content spotcheck 33/33.
- Only HS-01 CSS and typography regression belong to this unit. SVG path changes and their test remain unstaged for HS-02; publication remains pending.

## HS-01 selective candidate proof
- Isolated index-tree npm test 53/53, release check exit 0 and build passed: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-hero-containment-unit-build-b32a69ec-8f1f-49da-b4ed-4fb25e332670. Existing dependency junction reused without installation; staged/worktree diff-check passed.
- Only hero CSS, typography regression and tracker staged. SVG work and unrelated dirty trackers/exports preserved; native review/publication parent-owned.
