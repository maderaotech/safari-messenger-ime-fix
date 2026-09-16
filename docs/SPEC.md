# Spec: Safari Messenger IME Fix

## Objective

協助使用者在 Facebook Messenger 使用中文、日文或其他輸入法時，避免輸入法組字階段按下 Enter 被誤判成送出訊息。


## Tech Stack

- Safari Userscripts-compatible JavaScript userscript
- GitHub repository and GitHub Pages-compatible static HTML
- No build tool, package manager, or runtime dependency

## Commands

```bash
node --check messenger-ime-fix.user.js
```

The project intentionally has no install, build, or test dependency commands.

## Project Structure

```text
messenger-ime-fix.user.js  # The installable userscript
README.md                  # Chinese and English user guide
docs/index.html            # Optional one-page installation guide
docs/SPEC.md               # Project specification
docs/IMPLEMENTATION_PLAN.md # Delivery plan and verification record
```

## Code Style

- Keep the userscript dependency-free and wrapped in an IIFE.
- Keep userscript metadata at the top of the file.
- Use plain, direct language in user-facing documentation.
- Keep the installation page static, responsive, keyboard-accessible, and free of third-party assets.

## Testing Strategy

- JavaScript syntax check with `node --check`.
- Metadata checks for the required `@name`, `@version`, `@match`, and `@grant` entries.
- Manual installation smoke test in Safari with Userscripts on Facebook Messenger.
- Manual responsive and keyboard smoke test for `docs/index.html` when GitHub Pages is available.

## Boundaries

- Always: Keep installation and permission steps clear; keep the script limited to Messenger/Facebook message URLs; verify syntax before publishing.
- Ask first: Change the IME interception behavior; add analytics, external JavaScript, or new permissions; add a license with different legal terms.
- Never: Collect message content; send network requests from the userscript; include secrets; publish unrelated repository history.

## Success Criteria

- [ ] A public repository exists at `maderaotech/safari-messenger-ime-fix`.
- [ ] The repository contains a bilingual README with copy-free installation steps.
- [ ] The raw `.user.js` URL is visible as an install button/link.
- [ ] A static bilingual installation page is available under `docs/`.
- [ ] The userscript passes a JavaScript syntax check.
- [ ] No unrelated files or prior umbrella-repository history are published.

## Open Items

- [Deferred] Confirm the final Safari/Userscripts behavior manually on the maintainer's Mac and/or iPhone after publication.
