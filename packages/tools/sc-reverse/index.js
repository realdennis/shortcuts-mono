#!/usr/bin/env node
const { icon = false, inputs } = require("yargs").argv;

const source = process.argv[2];
const cwd = process.cwd();
const fullpath = `${cwd}/${source}`;

const parsing = async () => {
  const bplist = require("bplist-parser");
  const result = await bplist.parseFile(fullpath);
  return result;
};

const renderJSON = json => console.log(JSON.stringify(json, null, 2));

const main = async () => {
  const [data] = await parsing();
  if (icon) {
    renderJSON(data.WFWorkflowIcon);
  } else if (inputs) {
    renderJSON(data.WFWorkflowInputContentItemClasses);
  } else {
    renderJSON(data);
  }
};

const showUsage = () => {
    console.log("$ sc-reverse ./xxx.shortcut > xxx.json // dump to file");
    console.log("$ sc-reverse ./xxx.shortcut --icon // get icon meta");
    console.log("$ sc-reverse ./xxx.shortcut --inputs // get the input contents");
  };
source !== undefined ? main() : showUsage();
