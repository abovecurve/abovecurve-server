const express = require("express");
const router = express.Router();

// api.abovecurve.com/health/
router.get("/covid-19", require("./covid-19"));

module.exports = router;