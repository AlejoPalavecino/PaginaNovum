# Client preview publication
Prepare the current feature branch for the owner's authorized client preview without changing main.

## Authorization and boundaries
- Repository: https://github.com/AlejoPalavecino/PaginaNovum.git.
- Authorized branch: codex/hero-supplied-background only; no main merge or main changes.
- This worker performs local release preparation only. Parent owns credential/session authorization, native consent/review, coherent commits, push and Pages dispatch/environment policy.
- Intended delivery inventory: 22 parent-audited feature paths plus this task and deployment workflow (24 total). Parent owns staging; no blanket staging.
- Excluded: .atl/, .codegraph/, dormant src/data/sectorsData.js and all 31 remaining untracked asset exports, including the six unused sector PNG icons.

### Exact publication inventory
1. arquitecture.md
2. assets-manifest.md
3. content.md
4. index.html
5. src/config/contact.js
6. src/main.js
7. src/styles/components/cta.css
8. src/styles/components/footer.css
9. src/styles/components/header.css
10. src/styles/components/hero.css
11. src/styles/components/sectors.css
12. tests/contact.test.js
13. tests/content.test.js
14. assets/images/backgrounds/hero-taller-transformacion.jpg
15. assets/images/seccion07/seccion07-foto-cnc-mecanizado.png
16. assets/images/transparent/hero/hero/assets/01_fondo_taller_industrial.png
17. src/scripts/sectorsAnimation.js
18. tests/contact-ui.test.js
19. odd/tasks/contact-express.md
20. odd/tasks/hero-reference-layout.md
21. odd/tasks/hero-supplied-background.md
22. odd/tasks/sectors-reference-layout.md
23. .github/workflows/deploy.yml
24. odd/tasks/client-preview-publication.md

### Prior evidence
- Prior evidence: final 46 tests passing, isolated build and release check exit 0; mounted visual evidence remains in contact/sectors task documents.
- Cumulative prior change forecast approximately 3,619 authored lines requires deliberate coherent commit boundaries and native candidate consent. No commits yet; review completion is not inferred from tests.

## CPP-01 — Align release contracts and pre-build gates
- [ ] Remove the reported sector CSS trailing whitespace, align editorial generated consultation example, distinguish active versus unshipped historical assets, and add tests/release check before workflow build.
- Route: delegated direct; preparation plus multi-file operational/editorial correction. Forecast approximately 120 authored lines, advisory only.
- Preserve workflow main push trigger, manual dispatch, permissions, environment, deployment actions and concurrency.
- Test-first exception: YAML/docs/whitespace changes have no meaningful executable RED runner within these allowed surfaces; use structural workflow readback and existing functional suite instead. No new testing dependencies.
- Checks: npm test, npm run check:release, unique external build, git diff --check, exact workflow preservation comparison.
- Scope: .github/workflows/deploy.yml, sectors CSS whitespace only, contact template in content.md, asset status notes in assets-manifest.md and this document.
- No source behavior changes, asset deletion, dependencies, remote access, staging, commit or native lifecycle action.
- Full Engram mirror pending parent: registered runtime session identity unavailable.

## CPP-02 — Parent delivery
- [ ] Reconcile exact publication paths and coherent commit boundaries; obtain native review consent/outcome as applicable.
- [ ] Commit/push only the authorized branch and deploy the selected branch through authorized credentials and environment policy.
- [ ] Verify the published URL before sharing it as client-ready; report any environment or release blocker.

## CPP-01 ordinary proof
- CSS change removes only the reported whitespace-only line; no functional CSS change. Editorial example now matches buildConsultationBody service/five-field data, optional-line omission and failure-only selectable recovery. Manifest explicitly separates three newly active assets from 31 unshipped historical exports/tool metadata.
- Workflow adds npm test then npm run check:release before build. Exact removal of the two added steps reproduces baseline bytes, proving main push/manual dispatch, permissions, environment, concurrency and deployment actions unchanged. No workflow run was dispatched.
- npm test: 46/46 passed; npm run check:release: exit 0; git diff --check: exit 0 (line-ending advisory warnings only).
- Build passed: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-release-prep-build-1e5cbe6c-6354-4e80-904c-255ca3bc9e2f. Unique outside-root output warning only.
- Baseline snapshot: C:\Users\alejo\AppData\Local\Temp\novum-release-prep-baseline-5ae42ddb-f277-4d97-8636-0f9f76b78492. No markup, runtime/configuration, assets or dependencies edited. No fresh browser proof claimed.
- CPP-01 ordinary checks complete; checklist remains pending parent acceptance/native handling. CPP-02 publication entirely pending; no remote probe/authentication, staging, commit, push or native review action. Engram mirror pending.

## Coherent section delivery strategy
- User confirmed exception-ok: oversized coherent section commits, no PRs and no main changes. Initial branch boundary: 16a44e1844f964386c66b73339f3c334aea7e8f8.
- Ordered boundaries: hero/navigation first; then sectors; contact/footer; release preparation, each only after parent native review handling.
- First unit uses selectively constructed index blobs for shared HTML/editorial/tests. Live uncommitted later-unit bytes remain untouched.

## First work-unit candidate proof
- Selective index tree contains hero/navigation only, base sectors/contact/runtime/configuration unchanged. Candidate npm test 23/23 and isolated production build passed from C:\Users\alejo\AppData\Local\Temp\novum-hero-candidate-97b3d3d9-de93-4082-b3fb-729fbd825997 using existing node_modules junction (no dependency installation).
- Build command: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-hero-unit-build-ec08a9e9-2dce-4b2e-8be8-f4fb76663131. No hidden untracked assets copied; git archive materialized the index tree.
- Shared content test newline normalization prevents mixed CRLF staged whitespace; later test behavior remains unstaged. Staged and working-tree git diff --check passed.
- Native review and later commits remain pending parent; no remote operation.

## Hero/navigation commit boundary
- Commit: 0be888e6854d5a3d95bbd1e13a90f3695d441671; parent: 16a44e1844f964386c66b73339f3c334aea7e8f8. Conventional message: feat(hero): recreate industrial reference hero and navigation.
- 10 paths, +644/-227 (871 authored lines), excluding the 246108-byte hero JPG. Oversized coherent boundary explicitly accepted by owner (exception-ok).
- Only this first unit committed. Later sector/contact/footer/release changes remain in the live worktree and unstaged. This boundary record is unstaged for a later tracking commit, not a mutation to the committed candidate.
- Parent native RDD assessment/review is next; no additional commit or remote operation performed.

## Sector unit preparation
- Hero/navigation boundary 0be888e6854d5a3d95bbd1e13a90f3695d441671 received native review approval with no findings and exact acknowledgement/burn, as reported by parent.
- Sectors is the next exception-ok coherent unit; only sector HTML/editorial/tests/CSS/controller, main import/init and CNC asset staged. Contact/config/footer/workflow stay outside this commit.

## Sector commit boundary
- Commit 2e5404980556c4f6c52d5e8a3638fae2fe08b60c; parent 0be888e6854d5a3d95bbd1e13a90f3695d441671. Message: feat(sectors): match industrial reference composition.
- Ten paths, +983/-150 (1133 authored lines), excluding CNC binary. Coherent oversized section accepted via exception-ok. Candidate npm test 29/29 and isolated build passed; staged/worktree diff-check passed after task EOF normalization.
- Parent native review is next. Contact/footer/release and excluded historical/tool assets remain unstaged. This tracking record is unstaged for a later unit.

## Contact/footer unit preparation
- Parent reported sector boundary 2e5404980556c4f6c52d5e8a3638fae2fe08b60c native approval and exact acknowledgement/burn. Hero was already approved without findings.
- Sector review advisory (nonblocking): whole-section observer threshold 0.15 may be unreachable at small viewport height/high zoom. Record as follow-up; do not reopen or mutate approved sector bytes in this unit.
- Next exception-ok unit is contact/footer: compact fields, confirmed email, current-field copy, failure-only selectable recovery and integrated footer. Workflow/release catalog remains excluded.

## Contact/footer commit boundary
- Commit e2dbb0633eea8bf0925692e349397ca7dd48fc27; parent 2e5404980556c4f6c52d5e8a3638fae2fe08b60c. Message: feat(contact): streamline consultation and integrate footer.
- Fourteen paths, +1019/-705 (1724 authored lines), workshop PNG excluded. Owner exception-ok applies; native review pending parent before release unit.
- Candidate npm test 46/46, release check exit 0, isolated build successful; staged/worktree diff-check passed. No native email launch or remote access.
- Remaining workflow/catalog/formatting deltas and excluded metadata/historical exports stay unstaged. This SHA record is unstaged for next tracking unit.

## Release guardrails preparation
- Parent reported contact/footer boundary e2dbb0633eea8bf0925692e349397ca7dd48fc27 native approval and exact acknowledgement/burn; hero and sectors were already approved.
- Nonblocking contact advisory R3-001: delayed clipboard rejection can reveal captured older text and focus recovery after a field/service edit. Separate follow-up, not a reopening or correction of approved bytes. Sector small-height/high-zoom observation advisory also remains follow-up.
- Final unit stages only workflow checks, asset catalog reconciliation and publication progress. content.md already equals committed contact/editorial contract. Remaining content-test delta is suite ordering and H1 assertion formatting/message from selective staging, not omitted functionality; excluded from this unit.
- Public URL and deployment verification remain pending; no publication inferred from local tests.

- Parent authorized the remaining content-test cosmetic normalization in this release unit. Sorted nonblank lines match the previous candidate after normalizing only the H1 assertion message/formatting, proving all functional assertions unchanged; suites retain 46 passing tests.

## Release unit candidate proof
- Final isolated candidate npm test 46/46; release check exit 0; production build successful: npm run build -- --outDir C:\Users\alejo\AppData\Local\Temp\novum-release-final-unit-build-adc8a797-4c77-401d-a0d5-c31e3c693809. Mirror C:\Users\alejo\AppData\Local\Temp\novum-release-candidate-0e0fa64f-9218-4afc-a6ab-149635871c7c contains index-tree source plus exact staged final tests, with only existing node_modules junction reused.
- All 35 HTML asset references exist in candidate; successful Vite build resolves CSS/runtime assets. Approved HTML/runtime/component styles equal live frontend bytes under Git line-ending normalization; release unit adds no frontend source changes.
- Workflow/main triggers, dispatch, permission and environment policy preserved. Public URL remains unverified; no remote operation performed.
