// ==UserScript==
// @author       Janne K
// @name         Newspaper Paywall Bypass
// @description  Bypasses paywall on Finnish newspapers' websites
// @version      1.1.2
// @homepage     https://github.com/scoobadog/greasemonkey/
// @downloadURL  https://raw.githubusercontent.com/scoobadog/greasemonkey/master/scripts/newspaper-paywall-bypass.user.js
// @include      /^https?:\/\/www\.(?:ess|hs)\.fi\/.+$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

Object.defineProperty(document, "referrer", {
	get: function() { return "https://t.co"; }
});