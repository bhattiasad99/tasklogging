const router = require("express").Router();
const { test } = require("../controllers/logger");

router.get("/", test);

module.exports = router;
