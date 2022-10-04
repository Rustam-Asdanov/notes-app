"use strict";
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      type: "string",
      description: "The title of the note",
    },
  },
  handler: function (arg) {
    console.log("KLyag " + arg.title);
  },
});

yargs.command({
  command: ["remove", "Remove"],
  describe: "remove a note",
  handler: function () {
    console.log("remove");
  },
});

yargs.command({
  command: ["read", "Read"],
  describe: "read a note",
  handler: function () {
    console.log("read");
  },
});

yargs.command({
  command: ["list", "List"],
  describe: "list all notes",
  handler: function () {
    console.log("list");
  },
});

yargs.parse();
