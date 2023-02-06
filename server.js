// import express from "express";
// import logsRouter from "./src/routes/logRouter/index.js";
// import { addMiddlewares } from "./src/config/middlewares.js";
// import { connectDb } from "./src/config/db.config.js";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";
// import chalk from "chalk";
// const app = express();
// // initializeFirebaseAdminProject();
// // Serve the files in the public directory
// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(path.resolve(__dirname, "public")));
// connectDb();

// addMiddlewares(app);
// app.use("/logs", logsRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // starting the server
// app.listen(3001, () => {
//   console.log(chalk.bgBlue(chalk.green("listening on port 3001")));
// });


const app = require("express")();
const PORT = process.env.PORT || 3000;

require("./app/routes")(app);
require("dotenv").config({});
require("helmet");
require("./app/config/middlewares")(app)

// connecting to db

  const db = require("./app/config/db.config");
  db.connectDB().then(()=>{
    console.log('Conencted to db');

  })

// 
app.listen(PORT, () => {
  console.log(`LISTENING on PORT ${PORT}`);
})


