const app = require("express")();
const PORT = process.env.PORT || 3000;

require("./app/routes")(app);
require("dotenv").config({});
require("helmet");
require("./app/config/middlewares")(app);

// connecting to db

const db = require("./app/config/db.config");
db.connectDB().then(() => {
  console.log("Conencted to db");
});

//
app.listen(PORT, () => {
  console.log(`LISTENING on PORT ${PORT}`);
});
