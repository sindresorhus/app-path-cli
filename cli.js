#!/usr/bin/env node
import meow from 'meow';
import appPath from 'app-path';

const cli = meow(`
	Usage
	  $ app-path <app-name|bundle-id>

	Examples
	  $ app-path Safari
	  /Applications/Safari.app
	  $ app-path com.apple.Safari
	  /Applications/Safari.app
`);

if (cli.input.length === 0) {
	console.error('Specify an app name');
	process.exit(1);
}

(async () => {
	console.log(await appPath(cli.input[0]));
})();
