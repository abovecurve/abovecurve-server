const express = require("express");
const router = express.Router();

const { malePopulationByStateAge } = require("../../../../database/census/population/2018/stateAge/index.js");

// male population
router.get("/", async function (req, res, next) {
  console.log(malePopulationByStateAge(), "malePopulationByStateAge");
  const malePopStateAge = await malePopulationByStateAge();
  console.log(malePopStateAge, "malePopStateAge in male.js");
  res.json(malePopStateAge);
});

module.exports = router;
