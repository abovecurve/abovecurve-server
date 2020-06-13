const express = require("express");
const router = express.Router();

const population = require("../../../../database/census/population/2018/stateAge");

// male population
router.get("/", async function (req, res, next) {
  const malePopStateAge = await population.malePopulationByStateAge();
  res.json(malePopStateAge);
});

module.exports = router;