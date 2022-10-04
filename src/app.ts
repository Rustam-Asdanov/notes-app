import express, { Application, Request, Response, NextFunction } from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port: number = 3000;

const add = (a: number, b: number): number => a + b;

app.get("/:text", (req: Request, res: Response, next: NextFunction) => {
  // const text: string = req.query.text as string; // when you get data from params
  const text: string = req.params.text; // when you get data from url
  fs.appendFileSync(__dirname + "/notes.txt", text);
  res.send("Start");
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
