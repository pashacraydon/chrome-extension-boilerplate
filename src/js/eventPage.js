/**
 * @file Chrome Extension Boilerplate
 * @name Example
 *
 * Extension events code.
 */

'use strict';

chrome.runtime.onInstalled.addListener((details) => {
	if (details.reason === "install") {
		alert('Chrome extension installed!')
	}
});


