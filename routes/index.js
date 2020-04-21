const express = require("express");
const router = express.Router();

// api.abovecurve.com/
router.use("/health", require("./health"));
router.use("/ping", require("./ping"));

router.get("/", function (req, res, next) {
  res.json({
    welcome:
      "Welcome to the Above Curve API. Here you will find data-sets on various fields of research.",
    dataSets: ["health"],
    links: [{ health: `/health` }],
  });
});

module.exports = router;
