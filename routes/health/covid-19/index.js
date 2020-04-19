var express = require('express');
var router = express.Router();

// api.abovecurve.com/health/diseases/covid
router.get('/', function(req, res, next) {
  res.json({ message: 'Hello from the API!' });
});

module.exports = router;
