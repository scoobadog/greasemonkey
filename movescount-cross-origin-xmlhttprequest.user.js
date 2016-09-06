// ==UserScript==
// @author       Janne K
// @name         Movescount Cross-Origin XMLHttpRequest
// @description  Fixes "No 'Access-Control-Allow-Origin' header is present on the requested resource" errors on Movescount.
// @version      1.1.3
// @homepage     https://github.com/scoobadog/tampermonkey/
// @updateURL    https://raw.githubusercontent.com/scoobadog/tampermonkey/master/movescount-cross-origin-xmlhttprequest.user.js
// @include      /^https?:\/\/www\.movescount\.com\/moves\/move.+$/
// @grant        none
// @run-at       document-body
// ==/UserScript==
suunto.move.samplesUrl = undefined;
suunto.move.trackUrl = undefined;
