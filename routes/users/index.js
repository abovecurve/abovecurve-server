var express = require("express");
var router = express.Router();

// Test route for API.
router.get("/register", function (req, res, next) {
  res.json({ message: "Thanks for creating an account with us." });
});

module.exports = router;
