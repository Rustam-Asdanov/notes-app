import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const port: number = 3000;

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Halo");
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
