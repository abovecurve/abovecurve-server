var express = require("express");
var router = express.Router();

// Test route for API.
router.get("/", function (req, res, next) {
  res.json({
    message: "Hello from the Above Curve API!",
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME
  });
});

module.exports = router;
