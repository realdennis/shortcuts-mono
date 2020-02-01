const { withVariables, actionOutput } = require("@joshfarrant/shortcuts-js");
const {
  comment,
  conditional,
  openURLs,
  runJavaScriptOnWebPage,
  URL
} = require("@joshfarrant/shortcuts-js/actions");

const userscript = require("./userscript");
const output = actionOutput();
const actions = [
  comment({
    text:
      "I made this shortcut to play Youtube on background, technically you can play any video background using this." +
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
  conditional({
    input: "Contains",
    value: "http",
    ifTrue: [
      URL({
        url: withVariables`vlc://${output}`
      }),
      openURLs()
    ]
  })
];

module.exports = actions;
