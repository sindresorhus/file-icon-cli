import test from 'ava';
import {execa} from 'execa';
import {fileIconToBuffer} from 'file-icon';

test('outputs location', async t => {
	const {stdout} = await execa('./cli.js', ['Safari'], {env: {__FILE_ICON_SHOULD_NOT_PIPE__: true}});
	t.true(stdout.endsWith('icon.png'));
});

test('outputs buffer when piped', async t => {
	const icon = await fileIconToBuffer('Safari');
	const {stdout} = await execa('./cli.js', ['Safari'], {encoding: 'buffer'});
	t.is(stdout.length, icon.length);
});
