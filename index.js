#!/usr/bin/env node
"use strict";
// console.log("Hello Obed!");
// process.stdout.write("Hello Obed!");
// process.stdout.write("\n");
// console.log(process.argv); // this print out the value of the command line input
/**
 * the first item is usually where my node is installed
 * the second param is where my file is
 * the third is the command line input text
 */
// console.log(process.argv.slice(2)); // this print out the value of the command line input

/**
 * but i can use minimist a module to get this
 */

const path = require("path");
const fs = require("fs");
const args = require("minimist")(process.argv.slice(2), {
  boolean: ["help"],
  string: ["file"],
});

if (args.help) {
  printHelp();
} else if (args.file) {
  syncprocessFilePath(process.resolve(args.file));
  //   console.log(filePath);
  //   console.log(__dirname);
} else {
  error("sorry you made a mistake", true);
}
// console.log(args);

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
    console.log(readi);

}
