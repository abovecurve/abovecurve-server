require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const getCovidData = (request, response) => {
  pool.query(`SELECT * FROM covid_19 WHERE data='${request.data}' ORDER BY id ASC`, (error, results) => {
    if (error) {
      throw error;
    }
    return results.rows;
  });
};

module.exports = {
  getCovidData,
};