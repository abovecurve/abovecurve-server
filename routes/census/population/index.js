const express = require("express");
const router = express.Router();

// api.abovecurve.com/census/population/us
router.use("/us", require("./us"));
router.get('/', function(req, res, next) {
  res.json({ message: 'census population data' });
});

module.exports = router;