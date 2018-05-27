import test from 'ava';
import execa from 'execa';
import fileIcon from 'file-icon';

test(`outputs location`, async t => {
	t.true((await execa.stdout('./cli.js', ['Safari'], {env: {__FILE_ICON_SHOULD_NOT_PIPE__: true}})).endsWith('icon.png'));
});

test(`outputs buffer when piped`, async t => {
	const icon = await fileIcon.buffer('Safari');
	t.is(await execa.stdout('./cli.js', ['Safari']), icon.toString('utf8'));
});
