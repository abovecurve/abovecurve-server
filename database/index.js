const covid = require("./health/diseases/covid-19");
require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: "census_population"
});
const malePopulationByStateAge = (request, response) => {
  pool.query(`SELECT * FROM census_2018_population_male_by_state_age`, (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows, "results.rows");
    return results.rows;
  });
};

console.log(malePopulationByStateAge());

module.exports = {
  malePopulationByStateAge,
  covid
};
