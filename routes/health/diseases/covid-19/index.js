var express = require('express');
var router = express.Router();

// api.abovecurve.com/health/diseases/covid-19
router.use("/statistics", require("./statistics"));
router.get('/', function(req, res, next) {
  res.json({ message: 'COVID-19 Data' });
});

module.exports = router;
