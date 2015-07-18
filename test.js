'use strict';
var path = require('path');
var test = require('ava');
var childProcess = require('child_process');

test(function (t) {
	t.plan(2);

	childProcess.execFile('./cli.js', ['Safari'], {cwd: __dirname}, function (err, stdout) {
		t.assert(!err, err);
		t.assert(path.basename(stdout.trim()) === 'Safari.app');
	});
});
