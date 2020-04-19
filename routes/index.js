const express = require("express");
const router = express.Router();

router.use("/health", require("./health"));
router.use("/ping", require("./ping"));

module.exports = router;