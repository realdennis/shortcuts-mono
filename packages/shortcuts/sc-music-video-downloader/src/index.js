const { actionOutput } = require("@joshfarrant/shortcuts-js");
const {
  comment,
  getContentsOfURL,
  runJavaScriptOnWebPage,
  quickLook
} = require("@joshfarrant/shortcuts-js/actions");

const userscript = require("./userscript");
const output = actionOutput();
const actions = [
  comment({
    text:
      "Music / Video Downloader" +
      "\n\n" +
      "Designed by @realdennis" +
      "\n" +
      "Source code: https://github.com/realdennis/shortcuts-mono"
  }),
  comment({
    text: `Usage:
1. Open the youtube/video link on Safari
2. Launch this shortcut
    `
  }),
  runJavaScriptOnWebPage(
    {
      text: `
const closure = ${userscript.toString()};
const result = closure();
completion(result);`
    },
    output
  ),
  getContentsOfURL({}),
  quickLook()
];

module.exports = actions;
