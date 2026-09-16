// ==UserScript==
// @name         Messenger Safari 注音 Enter 修正
// @namespace    https://github.com/maderaotech/safari-messenger-ime-fix
// @version      1.0.0
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
  let compositionEndedAt = 0;

  document.addEventListener('compositionstart', () => {
    composing = true;
  }, true);

  document.addEventListener('compositionend', () => {
    composing = false;
    compositionEndedAt = performance.now();
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key !== 'Enter') {
      return;
    }

    const isImeEnter =
      composing ||
      event.isComposing ||
      event.keyCode === 229 ||
      performance.now() - compositionEndedAt < 100;

    if (!isImeEnter) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
})();
