module.exports = function (app) {
  app.get("/", (req, res) => {
    return res.json({
      message: "Welcome to logger API",
    });
  });

  app.use("/api/logger", require("./logger.routes"));
};
