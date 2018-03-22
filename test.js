import test from 'ava';
import execa from 'execa';
import fileIcon from 'file-icon';

test(`outputs buffer when piped`, async t => {
	const icon = await fileIcon.buffer('Safari');
	t.is(await execa.stdout('./cli.js', ['Safari']), icon.toString('utf8'));
});
