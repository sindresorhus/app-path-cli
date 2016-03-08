import test from 'ava';
import execa from 'execa';

test(async t => {
	t.is((await execa('./cli.js', ['Safari'])).stdout, '/Applications/Safari.app');
});
