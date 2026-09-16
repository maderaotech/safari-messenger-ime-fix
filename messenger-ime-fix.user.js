// ==UserScript==
// @name         Messenger Safari 注音 Enter 修正
// @namespace    https://github.com/maderaotech/safari-messenger-ime-fix
// @version      1.0.4
// @description  避免 Safari 注音上屏時誤觸 Messenger 送出
// @match        https://www.messenger.com/*
// @match        https://www.facebook.com/messages/*
// @match        https://www.facebook.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  let composing = false;

  const getEditableTarget = target => {
    const element = target instanceof Element ? target : target?.parentElement;
    return element?.closest('input, textarea, [contenteditable], [role="textbox"]');
  };

  // 純監視器：移除時輸入框會在 IME Enter 後短暫縮短再恢復；保留 input 監聽以驗證此時序問題。不記錄、不讀取 DOM、不修改事件。
  document.addEventListener('input', () => {}, true);

  document.addEventListener('compositionstart', () => {
    composing = true;
  }, true);

  document.addEventListener('compositionend', () => {
    composing = false;
  }, true);

  document.addEventListener('keydown', event => {
    const editable = getEditableTarget(event.target);
    if (event.key !== 'Enter' || !editable) {
      return;
    }

    const isImeEnter =
      composing ||
      event.isComposing ||
      event.keyCode === 229 ||
      event.which === 229;

    if (!isImeEnter) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
})();
