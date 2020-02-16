const { actionOutput, withVariables } = require("@joshfarrant/shortcuts-js");
const {
  comment,
  runJavaScriptOnWebPage,
} = require("@joshfarrant/shortcuts-js/actions");

const userscript = require("./userscript");
const output = actionOutput();
const actions = [
  comment({
    text:
      "Play on background / collapse / auto loop." +
      "\n\n" +
      "Designed by @realdennis" +
      "\n" +
      "Source code: https://github.com/realdennis/shortcuts-mono"
  }),
  comment({
    text: `To bypass visibility & mobile mode detect, also auto loop in background.`
  }),
  runJavaScriptOnWebPage(
    {
      text: `
const closure = ${userscript.toString()};
const result = closure();
completion(result);`
    },
    output
  )
];

module.exports = actions;
