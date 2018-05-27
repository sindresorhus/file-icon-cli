#!/usr/bin/env node
'use strict';
const meow = require('meow');
const tempy = require('tempy');
const fileIcon = require('file-icon');

const cli = meow(`
	Usage
	  $ file-icon <app-name|bundle-id|file-path>
	  $ file-icon <app-name|bundle-id|file-path> > icon.png

	Options
	  --size  Size of the icon [Max: 1024]

	Examples
	  $ file-icon Safari
	  /tmp/86ca9400-9f34-4a64-ab24-027d80f88b46/icon.png
	  $ file-icon com.apple.Safari
	  /tmp/ece2b714-6c6c-4677-a57c-e0e18f7b9405/icon.png
	  $ file-icon unicorn.jpg --size=512
	  /tmp/c3871faa-d759-48b9-ac85-5504d712a02a/icon.png
	  $ file-icon Safari > icon.png
`);

const destination = tempy.file({name: 'icon.png'});

(async () => {
	const icon = await fileIcon.buffer(cli.input[0], {
		size: cli.flags.size,
		destination
	});

	if (process.stdout.isTTY || process.env.__FILE_ICON_SHOULD_NOT_PIPE__) {
		console.log(destination);
	} else {
		process.stdout.write(icon);
	}
})();
