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

### Note 
If you do note the `entry` / `target` metas in package.json, it will using the default value (`src/` / `dist/`).

---

LICENSE MIT © 2020 realdennis