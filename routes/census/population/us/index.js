var express = require('express');
var router = express.Router();

const db = require("../../../../database/census/population/2018/stateAge/index.js");

// api.abovecurve.com/census/population/us
router.use("/male", db.getMalePop);
router.get('/', function(req, res, next) {
  res.json({ message: 'census population data for the United States' });
});

module.exports = router;
