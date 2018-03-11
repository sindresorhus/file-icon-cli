import test from 'ava';
import execa from 'execa';

test(`outputs created icon's location`, async t => {
	t.true((await execa.stdout('./cli.js', ['Safari'])).endsWith('icon.png'));
});

test(`prints buffer to stdout`, async t => {
  t.true((await execa.stdout('./cli.js', ['Safari', '--stdout'])).startsWith(Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])));
});
