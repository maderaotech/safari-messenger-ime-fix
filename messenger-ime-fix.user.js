// ==UserScript==
// @name         Messenger Safari 注音 Enter 修正
// @namespace    https://github.com/maderaotech/safari-messenger-ime-fix
// @version      1.0.1
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
