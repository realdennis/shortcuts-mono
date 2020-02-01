#!/usr/bin/env node

/**
 * Usage:
 *
 * $ sc-get https://www.icloud.com/shortcuts/somehashhere
 * It should get the name.shortcut
 *
 */

import fetch from "node-fetch";
import * as chalk from "chalk";
import * as fs from "fs";
import * as util from "util";
import * as stream from "stream";

const isDebugMode = process.argv.includes("--debug");
const input: string = process.argv[2];

const getMeta = async (target: string) => {
  // If icloud structure change in the future, only need to change these computed logic.
  const getShortcutName: (arg: any) => string = responseObject =>
    responseObject?.fields?.name?.value || "shortcut";
  const getDownloadURL: (arg: any) => string = responseObject =>
    responseObject?.fields?.shortcut?.value?.downloadURL || "";
  // request for meta
  let name: string = "",
    downloadURL: string = "";
  try {
    const response = await fetch(target);
    const json = await response.json();
    name = getShortcutName(json);
    downloadURL = getDownloadURL(json);
  } finally {
    return { name, downloadURL, isSuccess: !!downloadURL };
  }
};

const saveFile = async ({ readable, fileName }) => {
  const getLegalFilename = (str:string) => str.replace(/[ &\/\\#,+()$~%.'":*?<>{}]/g, "")
  try {
    // pipe to file
    const fullName = `${getLegalFilename(fileName)}.shortcut`;
    const writable = fs.createWriteStream(`./${fullName}`);
    const pipeline = util.promisify(stream.pipeline);
    await pipeline(readable, writable);
    console.log(
      `${chalk.green("Done")} Please check ${chalk.yellow(
        fullName
      )} in current work directory.`
    );
  } catch (e) {
    console.log(`${chalk.red("Error")} An exception occurred while saving the file.`);
    isDebugMode && console.error(e);
  }
};

const main = async (input: string) => {
  const target: string = input.replace("/shortcuts", "/shortcuts/api/records");
  const { name, downloadURL, isSuccess = false } = await getMeta(target); // Never exception promise, cause it used finaly keyword
  if (!isSuccess) {
    console.log(
      `${chalk.red(
        "Error"
      )} Unable to get meta, please check if the shortcut URL exists.`
    );
    return;
  }
  try {
    // request for shortcut file
    const { body, ok } = await fetch(downloadURL);
    ok && (await saveFile({ readable: body, fileName: name }));
  } catch (e) {
    console.log(
      `${chalk.red("Error")} An exception occurred while fetching shortcut file.`
    );
    isDebugMode && console.error(e);
  }
};

const showUsage = () => {
  console.log(
    `${chalk.cyan("Warning")} You need to provide the iCloud link of shortcut!`
  );
  console.log("$ sc-get https://www.icloud.com/shortcuts/somehashmightbehere");
  console.log("$ sc-get --debug //show debug message")
};
input !== undefined ? main(input) : showUsage();
