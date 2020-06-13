var express = require('express');
var router = express.Router();

// api.abovecurve.com/census/population/us
router.use("/male", require("./male"));
router.get('/', function(req, res, next) {
  res.json({ message: 'census population data for the United States' });
});

module.exports = router;
