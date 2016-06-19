/**
 * @file Chrome Extension Boilerplate
 * @name Example
 *
 * Extension background code.
 */

'use strict';


chrome.runtime.getBackgroundPage((eventPage) => {
	$(document).ready(() => {
		alert('The DOM is ready!');
	});
});

