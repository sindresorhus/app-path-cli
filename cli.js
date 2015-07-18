#!/usr/bin/env node
'use strict';
var meow = require('meow');
var appPath = require('app-path');

var cli = meow({
	help: [
		'Usage',
		'  $ app-path <app-name|bundle-id>',
		'',
		'Examples',
		'  $ app-path Safari',
		'  /Applications/Safari.app',
		'  $ app-path com.apple.Safari',
		'  /Applications/Safari.app'
	]
});

if (cli.input.length === 0) {
	console.error('Please supply an app name');
	process.exit(1);
}

appPath(cli.input[0], function (err, path) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(path);
});
