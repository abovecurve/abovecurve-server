const express = require("express");
const router = express.Router();

// api.abovecurve.com/census/population
router.use("/population", require("./population"));
router.get('/', function(req, res, next) {
  res.json({ message: 'census data' });
});

module.exports = router;
