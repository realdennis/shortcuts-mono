## sc-build

Basically it just wrap the `buildShortcut` method of `shortcut-js`, to suit different package, you can jot down your `entry` folder and `target` folder in corresponding `package.json` of shortcut package.

### Install

```sh
$ yarn add sc-build -D
```

### Usage

In your package.json:

```json
{
    "...":"",
    "entry": "src/index.js",
    "target": "dist/",
    "scripts":{
        "build": "sc-build"
    },
}
```

Run build script
```sh
$ yarn build 
```

### Build from JSON

Some shortcut might be reversed to a raw json file by `sc-reverse`, and could not be implemented by shortcut-js currently. 

But you can also build back to `.shortcut` using `sc-build --fromJSON`, so that other contributor / developer could build their own latest shortcut instead download from iCloud.

```json
{
    "...":"",
    "entry": "src/index.json",
    "target": "dist/",
    "scripts":{
        "build": "sc-build --fromJSON"
    }
}
```

### Note 
If you do note the `entry` / `target` metas in package.json, it will using the default value (`src/index.js` / `dist/`).

---

LICENSE MIT © 2020 realdennis