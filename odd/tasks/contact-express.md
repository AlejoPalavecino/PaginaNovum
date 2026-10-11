# Express contact inquiry

## Objective
Make first contact quick and easy with one problem field and an email continuation, retaining the optional editable consultation guide.

## Authorized scope and constraints
- Latest user-approved reference supersedes the one-field visual layout: full workshop background, left editorial column/checklist and right dark consultation card with service select and five fields. Company, name/role, reply contact and deadline are optional; the problem remains the only required information for email continuation.
- Reuse existing clean workshop/part/CAD assets. Never embed the screenshot containing baked-in UI. Exact photographed-part parity is not available; no new images/downloads are needed.
- User explicitly approved a single field, “¿Qué necesitás resolver?”, and “Continuar por correo”. Existing Spanish UI remains professional and consistent.
- Email opens the visitor's mail application with selected service and entered problem; the website does not send messages.
- Contact address explicitly confirmed by the owner: `novum.industrial.ar@gmail.com`. Preserve the confirmed-email guard and exact warning text for invalid configurations; hide the warning when confirmed.
- No backend, registration, WhatsApp, external service or dependencies.
- Guide always visible, editable and copyable; copying reads current text and failed clipboard access selects it without overwriting edits.
- Service CTA preselection and reset remain functional; preserve entered problem and edited guide.
- Preserve navbar, hero, other sections, unrelated scripts and all inherited dirty changes against pre-edit bytes.

## Delivery
- Active branch: `codex/hero-supplied-background`; no branch change or remote operation authorized.
- Strategy: ask-on-risk; forecast 250–380 authored source/test/editorial lines plus tracking, counted against a pre-edit snapshot.
- Commit cannot safely include whole shared files because unrelated prior changes are uncommitted. Do not stage or commit unrelated work; delivery/commit isolation remains pending user decision.
- RDD switch remains unchanged. Review has not been granted or waived for this feature.
- Engram full-document mirror pending: host session registration unavailable.

## Tasks
- [ ] CE-03 — Simplify form hierarchy and integrate footer.
  - Route: delegated direct; trigger: contact/footer markup, component styles and regression checks.
  - Put service and required problem first; group optional details, reduce duplication and move guide copying beside the always-visible editable guide.
  - Integrate the footer with a dark surface, white existing logo, readable existing links/tagline and smooth contact transition. Do not invent social links or claims.
  - Preserve IDs, contact logic/configuration, current values and accessibility; navbar/Hero/other sections unchanged.
  - Test-first structural regressions, full tests, isolated build, release email check and parent desktop/mobile keyboard/layout checks.
  - Forecast: 180–300 authored lines against current snapshot; no commit on mixed inherited baseline. Formal review/isolation remain pending.
- [ ] CE-02 — Adapt contact to the supplied two-column reference.
  - Route: delegated direct; triggers: multi-file layout/handler/config/test changes and preparation reading.
  - Acceptance: workshop backdrop, white/orange editorial headline, four outlined information cues, dark right card, labeled native service select, five labeled fields with four optional, truthful email continuation and always-visible editable/copyable secondary guide.
  - Native select and existing service CTAs/reset synchronize both ways without losing visitor inputs or manually edited guide; optional details are included in email only when nonempty.
  - Preserve navbar, Hero, other sections and existing APIs/placeholder-email guard; no backend or fabricated business proof.
  - RED/GREEN tests, full tests, isolated build and passing email-configuration release check; mounted desktop/mobile visual, keyboard and service-selection proof; independent verification.
  - Forecast: 600–850 authored changed lines including coherent CSS/markup refactor and tests. This is not a hard cap; do not omit tests or minify. Delivery strategy/isolation decision is required before any commit; no commit is planned on this mixed dirty baseline.
  - Commit and formal review remain pending; no approval inferred.
- [ ] CE-01 — Implement and verify express contact.
  - Route: delegated direct; triggers: multi-file behavior, test-first implementation and preparation reading.
  - Acceptance: one brief labeled problem field, primary email continuation, visible optional editable guide, preserved service selection and inputs, verbatim clipboard copy/fallback, no fictitious email link.
  - Tests: observe meaningful deterministic RED before implementation, then GREEN and refactor.
  - Commands: `node --test tests/contact.test.js tests/content.test.js`; `npm test`; isolated temporary production build; `npm run check:release` (must pass for the now-confirmed email; does not constitute publication approval).
  - Runtime: keyboard input, service preselection/reset, input preservation, edited guide, clipboard success/failure, placeholder-disabled continuation, representative desktop/mobile overflow.
  - Independent verification and parent runtime spot check required if native risk is high/unassessable.
  - Commit/review proof pending, not complete merely because source tests pass.

## Progress
- Read-only explorer mapped the current contact flow. Existing guide is hidden/readonly, copy regenerates text and hides it, and service changes overwrite it; these contradict the requested editable visible guide.
- Existing centralized contact validation rejects the placeholder correctly; preserve that behavior and existing guide API.
- CodeGraph used for JS call flow; known HTML/CSS exclusions require bounded filesystem inspection.

## Next step
CE-03 ordinary proof: independent verifier reran tests 41/41 and release exit 0; confirmed non-contact/footer HTML, runtime/config and header/hero CSS unchanged. Parent final desktop/mobile inspection verified problem-first hierarchy, optional-field grouping, visible editable guide, copy-header wrapping and footer dark integration; scrollWidth stayed within viewport at 1440px and 375px. Primary action spacing corrected to 20px and reverified. Screenshot `C:/Users/alejo/.codex/visualizations/2026/10/10/01a126fb-f496-7201-87f7-50ebf2255cc7/form-footer.jpg`. Viewport restored.

Latest user request explicitly authorizes full local-change review, necessary commits, push and GitHub Pages publication for client preview. Local origin is `https://github.com/AlejoPalavecino/PaginaNovum.git`; branch remains `codex/hero-supplied-background`. Local audit found no deterministic asset/source blocker, all 42 HTML/CSS resources exist with exact case; existing deploy workflow triggers pushes only on main and also supports workflow_dispatch. Publishing this branch needs explicit dispatch or a separately authorized main change. Credential/session authorization remains to be obtained before any remote probe. No GitHub auth/session inspected or remote mutation performed.

Publication requires deliberate staging of runtime assets/controller/tests/trackers, not blanket staging of unused raster exports/tooling. All-source diff exceeds 3000 authored lines; proposed coherent units: sectors, hero/navigation, contact/footer and optional release guardrails. Formal review/inventory, safe hunk staging and remote deployment proof remain pending. Main stays untouched.

CE-02 final ordinary proof: independent verifier reran full tests 38/38 and release check exit 0, found no blocking source defect, and confirmed non-contact HTML/header/hero CSS/unrelated runtime bytes unchanged. Parent spot check reran focused tests 38/38. Parent mounted Edge inspection at 1440, 992, 375 and 320px observed no horizontal overflow; corrected heading is white, card/labels remain readable and keyboard Tab moves company to name with visible focus. Actual mailto recipient, normalized service and Unicode/multiline problem/company verified without opening a mail client. Service change/reset retained typed problem/company/edited guide; clipboard button copied that guide verbatim and kept it visible. Test inputs were cleared by reload. Native clipboard rejection fallback is covered by runtime tests, not a forced browser permission failure. Screenshot: `C:/Users/alejo/.codex/visualizations/2026/10/10/01a126fb-f496-7201-87f7-50ebf2255cc7/contact-reference.jpg`.

Native assessment remains high/unassessable due undeclared untracked inventory. Selectorless preflight requests inventory selection and includes inherited work; no freeze or consent/approval. Formal review and safe commit isolation remain pending, so task checkboxes are not closed. No message sent, commit or publication; viewport override restored. Memory mirror pending due unregistered host session.

CE-01 source implementation and ordinary automated verification are complete, not full acceptance.
- Independent verifier reran `npm test`: 34 passed, no failures/skips; `npm run check:release`: expected exit 1 for the unchanged email placeholder.
- Parent spot check: focused tests 27/27; local page HTTP 200.
- Independent snapshot comparison confirmed non-contact HTML, navbar/hero styles and unrelated runtime bytes unchanged. No blocking source/handler accessibility defect found.
- Actual mounted-browser inspection remains pending: two browser-tab attachment attempts timed out, tab inventory was empty, and opening the app browser panel did not complete. No visual, native clipboard or mail-client integration success claimed.
- Native assessment remains high/unassessable because untracked inventory must be declared and workspace review includes inherited changes. No candidate freeze, consent or approval; RDD remains on.
- No staging, commit or publication. Source/test/editorial delta 453 lines is justified by dependency-free runtime coverage and coherent legacy-handler replacement. Strategy must be resolved before any commit; there is no PR or publication in this request.
- Memory writes remain unavailable because host session registration is missing; full mirror pending.

Next: mounted desktop/mobile keyboard and clipboard verification, then candidate-scope/commit-isolation decision. The owner subsequently confirmed the real address for CE-02; publication and delivery decisions remain separate.

## Writer implementation and proof (2026-10-10)
- CE-01 implementation is ready for independent runtime inspection; checkbox remains unchecked pending parent verification/review and safe delivery handling.
- Added one labeled problem textarea and “Continuar por correo”. The disabled link has no href while the email is unconfirmed or the problem is empty; keyboard Enter gives contextual guidance without pretending to send a message.
- Added express body/link helpers without changing the existing guide API or placeholder email. Encoded message contains normalized service and entered problem, not the long optional guide.
- Guide remains visible/editable; copying uses current textarea content. Clipboard success never hides it; rejection or absent clipboard access focuses/selects the current text without overwriting edits.
- Service preselection/reset preserves the problem and any edited guide. Only pristine guide templates regenerate.
- Deterministic RED: `node --test tests/contact.test.js tests/content.test.js tests/contact-ui.test.js` observed 23 passing / 9 failing tests before implementation.
- Final targeted command `node --test tests/contact.test.js tests/content.test.js`: 27/27 passing. `npm test`: 34/34 passing, including seven DOM-stub runtime regressions.
- Production build passed: `npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-contact-build-93a6f67f-a39f-4aa8-95a8-4abf1463d9cb`. Vite warned that the unique external directory would not be emptied; no cleanup override or project dist mutation was used.
- `npm run check:release` failed with code 1 because `[EMAIL_DE_CONTACTO]` is unconfirmed. This is the intended publication blocker; no publication or real email-client launch is claimed.
- Snapshot: `C:\Users\alejo\AppData\Local\Temp\novum-contact-baseline-40c29bff-263a-4521-afde-bd384ca80389`.
- Byte preservation: all HTML outside `#contacto`, full hero markup/header CSS/hero CSS, and main.js outside contact imports/handlers remain identical to baseline. Original contact.js bytes remain an unchanged prefix, preserving the existing configuration/guide API.
- Navbar markup SHA-256 remains `4f43973e3b316538219a7edc64440eeff21e27829e27533c0861f809ca5f200d`.
- Source/test/editorial delta versus snapshot: 453 authored changed lines excluding task tracking. Forecast exceeded because seven dependency-free runtime regressions add 122 lines and the coherent handler replacement removes 122 legacy lines; no artificial compression or override pile was used.
- Runtime tests use DOM stubs and do not prove mounted layout, real clipboard permissions, native mail-client availability or measured accessibility contrast. Parent browser inspection remains pending.
- No dependency install, staging, commit, push, review operation or review-mode change. Mirror remains pending because host memory registration is unavailable.

## CE-02 — Reference contact composition
- [ ] Recreate the approved full-background workshop contact layout with left editorial/checklist/part and a distinct right consultation card.
- Supersedes CE-01's single-field presentation: native service selector and five fields; company, name/role, reply contact and deadline remain optional, problem is the key field.
- Preserve existing express/guide APIs, all entered data and manually edited guide. Retain the invalid-email warning guard and no fake email link; use the owner-confirmed address. No backend or dependencies.
- Route: delegated direct; multi-file layout/behavior/tests. Reuse existing clean workshop and isolated industrial imagery, never the full screenshot.
- Forecast: 600–850 authored changed lines, advisory only. No commit/staging/publication or native review operation authorized for this writer.
- Required proof: deterministic RED/GREEN, npm test, isolated build, release-check code 0 for the confirmed address, preservation snapshot and independent browser inspection. Checkbox remains pending final acceptance.

### CE-02 implementation and ordinary proof (2026-10-10)
- Reference composition implemented with existing clean workshop background, left white/orange editorial heading, four outlined information cues and existing part/CAD; right dark card has a native service selector and five labeled fields. The four complementary fields are explicitly optional; only the problem is required.
- The guide remains visibly secondary, editable and copyable. Its visibility and the revision guard necessarily make the real card taller than the mockup.
- Owner explicitly confirmed `novum.industrial.ar@gmail.com` during implementation, superseding the earlier placeholder constraint. Configuration and editorial note now use that exact address. Revision text remains in markup for invalid configurations and is hidden at runtime when confirmed; empty problem still produces no href.
- Added structured-detail helpers without changing prior express/guide APIs. Only nonempty optional values join the normalized service and problem in the encoded email body. The reply field accepts either email or telephone as plain text.
- Service selector, solution CTA preselection and reset are synchronized. All typed values and manually edited guide survive changes; pristine guide may regenerate.
- RED before implementation: `node --test tests/contact.test.js tests/content.test.js tests/contact-ui.test.js` observed 34 passing / 3 failing tests.
- Final GREEN after the email confirmation and title-color correction: same targeted command 38/38; `npm test` 38/38, with no failures or skips.
- Production build passed: `npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-contact-reference-final-build-75b8e2b2-d9b5-40f8-9558-4a647fd80267`. Unique external output directory warning only; no dependency installation or dist mutation.
- `npm run check:release` now passes with code 0. The checker was inspected: it validates the configured email, not every repository placeholder. This check does not certify full publication readiness or authorize publication.
- Exact-address Unicode mailto verified through URL parsing in tests; no native mail client opened and no message sent.
- Parent's first 1440px mounted screenshot found global heading colors leaking into the dark contact composition. Both contact title rules now explicitly use white. Fresh independent browser confirmation of final bytes remains pending; no measured contrast certification claimed.
- Snapshot: `C:\Users\alejo\AppData\Local\Temp\novum-contact-reference-baseline-49f4e289-ce40-4228-ac88-91592fa41b2d`.
- Preservation comparisons passed: all non-contact HTML, hero markup, header CSS, hero CSS and unrelated main.js bytes are identical. Previous contact.js APIs remain byte-identical after normalizing only the newly authorized email/comment change.
- Navbar markup SHA-256 remains `4f43973e3b316538219a7edc64440eeff21e27829e27533c0861f809ca5f200d`.
- Source/test/editorial delta: 994 authored changed lines, excluding task tracking. CSS +246/-378 and HTML +60/-139 account for most of the coherent three-zone to two-zone refactor; obsolete third-column/HUD rules were removed rather than hidden under overrides. No budget-driven minification or omitted tests.
- CE-02 remains unchecked pending independent runtime/native-review/delivery handling. No staging, commit, push, publication or review operation; full Engram mirror remains pending because host registration is unavailable.

## CE-03 — Simplify form hierarchy and integrate the footer
- [ ] Put the required problem first, group optional details clearly, subordinate the visible editable guide and integrate the footer into the dark industrial palette.
- Route: delegated direct; contact/footer markup and component styles with semantic regression checks.
- Preserve all IDs, runtime/configuration bytes, confirmed email, service synchronization and guide-copy/fallback behavior. Keep navbar, hero and other sections unchanged.
- Forecast: 180–300 authored lines, advisory only. No commit, publication or native review operation.
- Acceptance pending independent browser/review handling; proof includes RED/GREEN, npm test, isolated build, release check and snapshot preservation.

### CE-03 writer proof (2026-10-10)
- Problem field now precedes the four optional inputs, grouped by a native fieldset/legend and helper. Optional fields use two columns on desktop and one below 600px; labels/IDs are preserved.
- Duplicate selected-service node remains hidden for runtime compatibility; native selector remains the visible source. Reset is understated with a 24px minimum target.
- Email preparation is the primary action. Guide copying moved to the guide header with smaller secondary styling; guide remains visible/editable at three initial rows, minimum 90px and vertical resize. Header uses wrapping flex layout for narrow screens.
- Footer uses #0c0d10, the existing white logo, readable legitimate navigation and unchanged tagline. Contact gradient fades to the same dark surface; footer padding aligns with contact.
- RED before source changes: targeted tests 38 passing / 3 failing. Final `node --test tests/contact.test.js tests/content.test.js tests/contact-ui.test.js`: 41/41; `npm test`: 41/41.
- Final isolated build passed: `npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-form-footer-final-build-2acb6a15-2829-46a8-bf52-52e9d6f18266`. Unique external-output warning only; no dist mutation or dependency installation.
- `npm run check:release` passed with code 0; confirmed address remains novum.industrial.ar@gmail.com. No native mail client opened and no messages sent.
- Parent 1440px mounted screenshot found the form/footer hierarchy visually integrated, then requested additional separation before the email action. Final source adds 20px above the action group. Fresh final/mobile browser acceptance remains parent-owned; no automatic visual or measured contrast certification claimed.
- Snapshot: `C:\Users\alejo\AppData\Local\Temp\novum-form-footer-baseline-a7e1e857-d375-4beb-b22f-a6c1516976ce`.
- Snapshot comparisons confirm all HTML outside contact/footer, header CSS, hero CSS, full main.js and full contact.js unchanged. Navbar markup SHA-256 remains `4f43973e3b316538219a7edc64440eeff21e27829e27533c0861f809ca5f200d`.
- Final source/test/editorial delta is 260 authored changed lines excluding task evidence: index +25/-17; contact CSS +53/-9; footer CSS +46/-73; tests +26/-0; editorial +6/-5.
- CE-03 remains unchecked pending parent final browser/review/delivery handling. No staging, commit, remote probe, push, publication or native review operation. Broader audit and publication follow-on belongs to the parent; Engram mirror remains pending.

## CE-04 — Match the compact reference form
- [ ] Replace the superseded CE-03 grouped form with five compact single-column icon controls in reference order, full-width email/copy actions and a restrained visible editable guide.
- Preserve accessible labels, optional details, required problem, IDs, runtime/configuration and all non-contact bytes including the footer.
- Route: delegated direct; markup/style/editorial regression correction. Forecast: 200–350 authored lines, advisory only.
- Verification: meaningful structural RED/GREEN, npm test, release check, isolated build and snapshot preservation; independent browser/native review remain pending. No commit or remote operation. Engram mirror pending.

### CE-04 writer proof (2026-10-10)
- CE-03 form hierarchy is superseded by the owner's compact reference correction; its dark footer is retained unchanged. Five icon controls now appear in company/name/reply/problem/deadline order, with 56px initial shells and visually hidden real labels distinguishing optional and required information.
- Native service selector is a compact orange-outlined pill. Main email action and full-width secondary copy action precede the optional guide; guide remains visible/editable at two initial rows with vertical resize. Problem expands on focus or entered content using CSS only.
- RED before source changes: targeted runner observed 39 passing / 2 failing structural expectations (field order and copy-button placement). Final targeted runner and npm test: 41/41 passing, no skips or failures. Release check passed with exit 0 and the confirmed address unchanged.
- Isolated production build passed: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-compact-contact-build-1c3fc9b8-da99-496d-aa0e-041871f32570. Unique outside-root output warning only, no dependencies or dist writes.
- Snapshot: C:\Users\alejo\AppData\Local\Temp\novum-compact-contact-baseline-4d842a03-3f77-419c-b382-7757ec4199c2. Every HTML byte outside contact, full footer CSS, runtime main.js and contact configuration match the snapshot. Navbar and hero HTML are therefore preserved.
- Source/test/editorial delta: 177 authored changed lines, excluding task tracking: HTML +18/-27; contact CSS +28/-63; tests +23/-9; editorial +4/-5. Coherent obsolete grouped-field/header rules removed; no code-golf.
- Parent notified that source is ready for mounted responsive inspection. Browser acceptance, native review and cumulative delivery remain pending; no measured contrast claim. No staging, commit, push, native mail launch, remote operation or review lifecycle operation. Engram mirror pending.

### CE-04 native-control polish
- Parent mounted desktop inspection observed five 56px shells with no horizontal overflow, but native light scrollbar/resizer styling on the problem field. Both contact textareas now opt into color-scheme: dark; scrolling and vertical resizing remain enabled. No markup/runtime/footer changes.
- Observed structural RED before CSS change; node --test tests/content.test.js is GREEN (22/22), and npm run check:release passed with exit 0. Fresh native-control visual confirmation remains parent-owned. CSS/test addition is six lines; no commit or native review operation.

### CE-04 parent verification
- Desktop 1440 px and mobile 375 px: five empty field shells measured exactly 56 px high; document width stayed within viewport.
- Entered problem expanded for readability and generated mailto to confirmed contact email. No email sent; synthetic value cleared and viewport restored.
- Screenshot: C:/Users/alejo/.codex/visualizations/2026/10/10/01a126fb-f496-7201-87f7-50ebf2255cc7/contact-compact.jpg.
- Independent verifier: npm test 41/41, check:release exit 0, isolated build successful; outside-contact HTML/runtime/config/footer preserved.
- Parent spot check: content tests 22/22. Native review, commits and publication remain pending; remote credential authorization unanswered. Engram mirror pending because runtime session registration is unavailable.


## CE-05 — Remove the duplicate guide editor
- [ ] Honor the explicit owner correction: remove the normally visible guide block and copy a guide generated from current service and populated fields. This supersedes prior always-visible/editable-guide acceptance.
- Manual-copy recovery stays available only after clipboard failure: reveal and select current generated text. Keep five compact controls, service synchronization, email encoding and all non-contact presentation.
- Route: delegated direct; minimal contact handler/markup/style/docs and regression updates. Forecast: 160–250 authored lines, advisory only. No dependencies, commit, remote or native review operation.
- Required proof: observed RED/GREEN, npm test, release check, isolated build and snapshot comparisons; parent browser acceptance pending. Engram mirror pending.

### CE-05 writer proof (2026-10-10)
- Owner explicitly superseded the visible/editable-guide requirement. Lower guide label/editor/helper/divider are now hidden normally. Existing fallback IDs remain only for selectable manual-copy recovery, with readonly text generated from current field/service values rather than a duplicate editor.
- Copy uses existing buildConsultationBody, preserving Unicode and line breaks without any configuration API change. Clipboard rejection or absence reveals, focuses and selects the captured current text. Successful copy and subsequent field/service changes hide recovery. Visitor-authored five-field values remain unchanged.
- RED: node --test tests/contact.test.js tests/content.test.js tests/contact-ui.test.js observed 35 passing / 5 failing before source changes. Final targeted and npm test GREEN: 40/40, no failures or skips. Superseded edited-guide tests replaced by populated-values/current-service and failure-only recovery assertions; existing email encoding/service preservation tests remain green.
- npm run check:release passed exit 0. Production build passed: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-copy-fallback-build-bcff18c0-84f4-40d9-b3c6-0523363a1075. Outside-root unique output warning only; no dist mutation or dependency installation.
- Snapshot: C:\Users\alejo\AppData\Local\Temp\novum-copy-fallback-baseline-2feaec8f-9d55-4257-a33b-3b85a75583fa. All HTML outside contact is identical, preserving navbar/hero/footer. main.js outside contact handlers is identical after accounting for the narrowly changed contact helper import.
- Source/test/editorial delta: 108 authored lines excluding task evidence: HTML +4/-4; main +9/-7; CSS +2/-0; content tests +6/-5; UI tests +30/-33; editorial +1/-1; architecture +3/-3.
- Parent notified for mounted visual/copy inspection; acceptance/review/delivery remain pending. No staging, commit, remote operation, native mail-client launch or review lifecycle action. Engram mirror pending.

### CE-05 parent browser proof
- Successful copy included current synthetic company/problem values while the guide stayed hidden. Values were cleared by reload; screenshot contact-no-guide.jpg saved in the current visualization directory. No native email sent.

## Contact/footer coherent commit candidate
- Isolated staged tree npm test 46/46, release check exit 0 and production build passed. Candidate directory: C:\Users\alejo\AppData\Local\Temp\novum-contact-candidate-728fb484-3c37-43b6-a820-5365eb2373d5. Existing node_modules reused without installation; no unstaged assets copied.
- Build command: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-contact-unit-build-e0110bfb-ea64-4196-b0bb-30e87c239048. Staged/worktree diff-check passed. Hero and sectors approved bytes remain unchanged; workflow excluded.
- Native assessment/review remains parent-owned, no remote access or email sending performed.
