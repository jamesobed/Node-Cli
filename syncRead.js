#!/usr/bin/env node
"use strict";

const path = require("path");
const fs = require("fs");
const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});

if (args.help) {
  printHelp();
} else if (args.file) {
  syncprocessFilePath(path.resolve(args.file));
} else {
  error("sorry you made a mistake", true);
}

function printHelp() {
  console.log("index usage:");
  console.log("    --help");
  console.log("");
  console.log("--help        print this help");
  console.log("");
}
function error(msg, i) {
  console.log(msg);
  if (i) {
    printHelp();
  }
}
function syncprocessFilePath(filePath) {
  const readi = fs.readFileSync(filePath);
  // console.log(readi); //// this will print out only bufer. to get the real text, u need to add utf8 encoding
  process.stdout.write(readi);
}
