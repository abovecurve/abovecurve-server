const express = require("express");
const router = express.Router();
const request = require("request");
const url =
  "https://api.census.gov/data/2018/acs/acs5?get=B01003_001E,B01001_002E,B01001_003E,B01001_004E,B01001_005E,B01001_006E,B01001_007E,B01001_008E,B01001_009E,B01001_010E,B01001_011E,B01001_012E,B01001_013E,B01001_014E,B01001_015E,B01001_016E,B01001_017E,B01001_018E,B01001_019E,B01001_020E,B01001_021E,B01001_022E,B01001_023E,B01001_024E,B01001_025E&for=state:*";
// const { malePopulationAgeState } = require("./male");

// api.abovecurve.com/census/population/us
router.use("/male", function(req, res, next) {
  request.get(url, function(error, resp, body) {
    if (error) {
      console.log(error);
      res
        .status(500)
        .send({
          error: "500",
          message:
            "The server encountered an error while trying to process this request."
        });
    } else {
      res.json(JSON.parse(body));
    }
  });
});

router.get("/", function(req, res, next) {
  res.json({ message: "census population data for the United States" });
});

module.exports = router;
