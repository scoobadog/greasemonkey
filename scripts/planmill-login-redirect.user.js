// ==UserScript==
// @author       Janne K
// @name         PlanMill Login Redirect
// @description  Redirects an expired session to a login page that doesn't fail.
// @version      1.3.5
// @homepage     https://github.com/scoobadog/greasemonkey/
// @downloadURL  https://raw.githubusercontent.com/scoobadog/greasemonkey/master/scripts/planmill-login-redirect.user.js
// @include      /^https:\/\/online\.planmill\.com\/.+\/.+$/
// @grant        none
// @run-at       document-body
// ==/UserScript==
var path = window.location.pathname;
if (document.getElementById("logindiv") !== null
	|| path.endsWith("j_security_check")) {

	var url = window.location.href
		.replace(path, path.substr(0, path.indexOf("/", 1)))
		.replace(window.location.search, "") + "/";

	if (url.length < window.location.href.length) {
		window.location.replace(url)
	}
}