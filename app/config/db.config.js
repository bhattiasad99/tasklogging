const mongoose = require("mongoose");

// import "dotenv/config";
// import chalk from "chalk";
// require("dotenv").config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const devdbname = process.env.MONGODB_DEV_DB_NAME;

module.exports = {
  connectDB: async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${devdbname}?retryWrites=true&w=majority`
      );

      const db = mongoose.connection;
      db.once("open", () =>
        console.log(chalk.bgGreenBright("Successfully connected to MongoDB"))
      );
      db.on("error", (e) => console.log(chalk.bgRed("ERROR"), chalk.red(e)));
    } catch (error) {
      console.log("error in connecting to db", error);
      process.exit(1);
    }
  },
};
