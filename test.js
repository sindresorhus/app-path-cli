import test from 'ava';
import execa from 'execa';

test('main', async t => {
	t.is(await execa.stdout('./cli.js', ['Safari']), '/Applications/Safari.app');
});
