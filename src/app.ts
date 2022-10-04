import express, { Application, Request, Response, NextFunction } from "express";
import fs from "fs";
import bodyParser from "body-parser";
import validator from "validator";
import chalk from "chalk";
import yargs from "yargs";

// chalk
const successMsg = chalk.bgGreen.bold;
const warningMsg = chalk.bgYellow;
const errorMsg = chalk.bgRed;
const infoMsg = chalk.blue.inverse;

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port: number = 3000;

const add = (a: number, b: number): number => a + b;

yargs.command({
  command: "add",
  describe: "Add a note",
  handler: function () {
    console.log("KLyag");
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("remove");
  },
});

yargs.command({
  command: "read",
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

console.log(yargs.argv);

app.get("/:text", (req: Request, res: Response, next: NextFunction) => {
  // const text: string = req.query.text as string; // when you get data from params
  const text: string = req.params.text; // when you get data from url
  console.log(validator.isEmail(text));

  fs.appendFileSync(__dirname + "/notes.txt", text);
  res.send("Start");
});

app.listen(port, () => {
  console.log(successMsg(`Server listen on port ${port}`));
});
