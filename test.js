import test from 'ava';
import execa from 'execa';

test(`outputs buffer when piped`, async t => {
	t.true((await execa.stdout('./cli.js', ['Safari'])).startsWith(Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])));
});
