#!/usr/bin/env node

// Build script from shortcuts.js
const { buildShortcut } = require("@joshfarrant/shortcuts-js");
const bplistCreator = require("bplist-creator");
const {
  name = "shortcut",
  entry = "src/index.js",
  output = "dist"
} = require(`${process.cwd()}/package.json`);

const {
  showInWidget = false,
  color,
  glyph,
  fromJSON = false
} = require("yargs").argv;
const source = require(`${process.cwd()}/${entry}`);
const shortcut = fromJSON
  ? bplistCreator(source)
  : buildShortcut(source, {
      showInWidget,
      icon: {
        ...(color && { color }),
        ...(glyph && { glyph })
      }
    });

// Output to target path
const fs = require("fs");
const targetDir = `${process.cwd()}/${output}`;
fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(`${targetDir}/${name}.shortcut`, shortcut);
