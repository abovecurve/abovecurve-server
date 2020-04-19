const express = require("express");
const router = express.Router();

router.get("/health", require("./health"));
router.get("/", require("./ping"));

module.exports = router;