const express = require("express");
const router = express.Router();
const { RDS_HOSTNAME, RDS_USERNAME, RDS_PORT, RDS_DB_NAME } = process.env;

// Test route for API.
router.get("/", function(req, res, next) {
  res.json({
    message: "Hello from the Above Curve API!",
    updated: "6/20/20 08:48am",
    host: `${RDS_HOSTNAME}`,
    user: `${RDS_USERNAME}`,
    port: `${RDS_PORT}`,
    database: `${RDS_DB_NAME}`
  });
});

module.exports = router;
