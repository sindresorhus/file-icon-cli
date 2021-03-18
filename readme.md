# file-icon-cli

> Get the icon of a file or app as a PNG image *(macOS)*

## Install

```
$ npm install --global file-icon-cli
```

## Usage

```
$ file-icon --help

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
```

## Tip

Get the icon as Base64:

```
file-icon --size=1024 /Applications/Safari.app | base64
```

## Related

- [file-icon](https://github.com/sindresorhus/file-icon) - API for this module
