/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"day5exercise1_giga/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
