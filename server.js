import express from "express";
import logsRouter from "./src/routes/logRouter/index.js";
import { addMiddlewares } from "./src/config/middlewares.js";
import { connectDb } from "./src/config/db.config.js";
import chalk from "chalk";
const app = express();

connectDb();

addMiddlewares(app);
app.use("/logs", logsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// starting the server
app.listen(3001, () => {
  console.log(chalk.bgBlue(chalk.green("listening on port 3001")));
});
