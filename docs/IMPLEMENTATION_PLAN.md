# Implementation Plan: Safari Messenger IME Fix

## Overview

Package the existing userscript as a public, user-facing project with clear Chinese and English installation instructions and a static installation page. Publish only the project files to `maderaotech/safari-messenger-ime-fix`.

## Tasks

### Phase 1: Documentation foundation

- [x] Task 1: Record the scope, constraints, and acceptance criteria.
  - Acceptance: `docs/SPEC.md` documents objective, commands, structure, style, testing, boundaries, and success criteria.
  - Verify: Review the specification for the no-Terminal installation flow.

### Phase 2: User installation flow

- [ ] Task 2: Write the bilingual README.
  - Acceptance: A first-time user can install, verify, update, and uninstall without Terminal.
  - Verify: Check every external link and follow the steps for macOS and iPhone/iPad.
  - Files: `README.md`

- [ ] Task 3: Add the static installation page.
  - Acceptance: The page presents the purpose, requirements, install button, permissions, and troubleshooting in Chinese and English.
  - Verify: Parse the HTML and inspect responsive/keyboard-friendly markup.
  - Files: `docs/index.html`

### Phase 3: Verification and publication

- [ ] Task 4: Verify the script and publication payload.
  - Acceptance: JavaScript syntax is valid, metadata is present, and only project files are selected for publication.
  - Verify: `node --check messenger-ime-fix.user.js`; inspect `git diff` and the clean publication tree.
  - Files: `messenger-ime-fix.user.js`, `.gitignore`

- [ ] Task 5: Create and push the public repository with `gh`.
  - Acceptance: `maderaotech/safari-messenger-ime-fix` is public and contains the tested project on `main`.
  - Verify: `gh repo view` and fetch the published raw script/README.
  - Files: remote repository only

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Userscripts permission wording differs by OS version | Medium | Give both Safari Settings and per-site permission guidance. |
| Publishing current umbrella history exposes unrelated projects | High | Build a clean publication tree and push only explicit project files. |
| A raw URL is opened with a query/hash suffix | Medium | Use a stable URL whose path ends in `.user.js`. |

## Checkpoint

Before publication: syntax check passes, README and installation page agree, no secrets are present, and the clean publication tree contains only intended files.
