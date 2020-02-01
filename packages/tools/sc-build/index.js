#!/usr/bin/env node

// Build script from shortcuts.js
const { buildShortcut } = require("@joshfarrant/shortcuts-js");

const {
  name = "shortcut",
  entry = "src/index.js",
  output = "dist"
} = require(`${process.cwd()}/package.json`);

const { showInWidget = false, color, glyph } = require("yargs");

const sourceAction = require(`${process.cwd()}/${entry}`);
const shortcut = buildShortcut(sourceAction, {
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
