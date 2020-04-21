var express = require("express");
var router = express.Router();

// Delete this route eventually.
router.get("/", function (req, res, next) {
  res.json({ message: "Hello from the Above Curve API!" });
});

module.exports = router;
