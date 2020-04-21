var express = require("express");
var router = express.Router();

// Test route for API.
router.get("/", function (req, res, next) {
  res.json({ message: "Hello from the Above Curve API!" });
});

module.exports = router;
