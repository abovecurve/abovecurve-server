const express = require("express");
const router = express.Router();

const covid = require("../../../../database/health/diseases/covid-19");

// statistics
router.get("/", async function (req, res, next) {
  const statistics = await covid.getCovidData();
  res.json(statistics);
});

module.exports = router;