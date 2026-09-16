# Messenger Safari IME Fix

在 Safari 使用 Facebook Messenger 打中文時，輸入法正在「組字」的 Enter 不應該把訊息誤送出去。這個小型 Userscripts 腳本會攔住那一次誤觸，正常送出訊息的 Enter 不受影響。

安裝很簡單：開啟 Userscripts、允許 Safari 權限，再點一下安裝連結。

## 中文｜安裝方式

### 你需要什麼？

- Mac、iPhone 或 iPad
- Safari
- [Userscripts（App Store）](https://apps.apple.com/app/userscripts/id1463298887)

### 安裝步驟

1. 安裝並開啟 **Userscripts**。
2. 在 Safari 開啟 Userscripts 延伸功能：
   - Mac：Safari → 設定 → 延伸功能 → **Userscripts**
   - iPhone / iPad：設定 → Safari → 延伸功能 → **Userscripts**
3. 允許 Userscripts 存取 `facebook.com` 和 `messenger.com`。如果 Safari 顯示「永遠允許」或「允許此網站」，請選擇允許。
4. 點這個安裝連結：

   **[安裝 Messenger Safari IME Fix](https://raw.githubusercontent.com/maderaotech/safari-messenger-ime-fix/main/messenger-ime-fix.user.js)**

5. Userscripts 顯示安裝提示後，按 **Install / 安裝**。
6. 回到 Messenger，重新整理頁面。

整個過程不需要 Terminal，也不需要複製貼上程式碼。

### 怎麼確認有成功？

在 Messenger 開一個對話，用注音或其他輸入法輸入中文。組字時按 Enter，不應該在文字還沒完成時誤送出訊息；文字完成後，再按一次一般 Enter 仍可送出。

### 更新腳本

重新開啟上面的安裝連結，Userscripts 會提供最新版本。更新後請開一次 Userscripts 延伸功能視窗，再重新整理 Messenger。

### 移除腳本

開啟 Safari 的 Userscripts 延伸功能，找到 **Messenger Safari 注音 Enter 修正**，關閉它或移到垃圾桶即可。這不會影響 Safari 或 Messenger。

### 遇到問題？

- **沒有看到安裝提示：** 確認你開啟的是結尾為 `.user.js` 的安裝連結，並在 Safari 開過 Userscripts 延伸功能視窗。
- **腳本沒有作用：** 確認 Userscripts 的總開關已開啟，且允許存取 Facebook / Messenger；更新或新增腳本後，重新開啟一次延伸功能視窗。
- **仍然誤送出：** 先重新整理 Messenger；若 Facebook 改變輸入框行為，請到 [Issues](https://github.com/maderaotech/safari-messenger-ime-fix/issues) 回報 Safari 版本、裝置和頁面網址。

## English | Installation

### What you need

- A Mac, iPhone, or iPad
- Safari
- [Userscripts from the App Store](https://apps.apple.com/app/userscripts/id1463298887)

### Install in a few clicks

1. Install and open **Userscripts**.
2. Enable the Userscripts Safari extension:
   - Mac: Safari → Settings → Extensions → **Userscripts**
   - iPhone / iPad: Settings → Safari → Extensions → **Userscripts**
3. Allow Userscripts to access `facebook.com` and `messenger.com`. Choose **Always Allow** or **Allow This Website** when Safari asks.
4. Open the install link:

   **[Install Messenger Safari IME Fix](https://raw.githubusercontent.com/maderaotech/safari-messenger-ime-fix/main/messenger-ime-fix.user.js)**

5. When Userscripts shows the installation prompt, choose **Install**.
6. Return to Messenger and reload the page.

No Terminal, command line, or copy-and-paste is required.

### Check that it works

Open a Messenger conversation and type Chinese or another IME-based language. Pressing Enter while the IME is still composing should not send the unfinished message. After composition is complete, press normal Enter to send as usual.

### Update

Open the install link again to get the latest version. After updating, open the Userscripts extension once, then reload Messenger.

### Remove

Open the Userscripts extension in Safari, find **Messenger Safari 注音 Enter 修正**, and disable it or move it to the Trash. Safari and Messenger are not changed.

### Troubleshooting

- **No installation prompt:** Make sure you opened the URL whose path ends in `.user.js`, then open the Userscripts extension once in Safari.
- **The script does nothing:** Make sure Userscripts injection is enabled and that Safari granted access to Facebook / Messenger. Open the extension once after adding or updating a script.
- **Enter still sends too early:** Reload Messenger. If Facebook changed its editor behavior, report your Safari version, device, and page URL in [Issues](https://github.com/maderaotech/safari-messenger-ime-fix/issues).

## Privacy

The script only watches IME composition and Enter key events on matched Facebook Messenger pages. It does not read, store, transmit, or analyze message content, and it has no network requests.

## Files

- [`messenger-ime-fix.user.js`](messenger-ime-fix.user.js) — the installable script
- [`docs/index.html`](docs/index.html) — a visual installation page for GitHub Pages
- [`docs/SPEC.md`](docs/SPEC.md) — project scope and acceptance criteria
- [`docs/IMPLEMENTATION_PLAN.md`](docs/IMPLEMENTATION_PLAN.md) — delivery plan

## License

No license has been added yet. Please open an issue before redistributing or publishing modified copies.
