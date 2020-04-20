const express = require("express");
const router = express.Router();

// api.abovecurve.com/health/
router.use("/diseases", require("./diseases"));
router.get('/', function(req, res, next) {
  res.json({ message: 'Health field' });
});

module.exports = router;