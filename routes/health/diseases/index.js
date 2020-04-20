const express = require("express");
const router = express.Router();

// api.abovecurve.com/health/diseases
router.use("/covid-19", require("./covid-19"));
router.get('/', function(req, res, next) {
  res.json({ message: 'Diseases category' });
});

module.exports = router;