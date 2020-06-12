const axios = require("axios");
const fs = require("fs");

const NHZipCodes = require("./database/census/population/nh/zipcodes.json");
const zipcodes = ["03031", "03032", "03033", "03034"];

let tempArray = [];

const url =
  "https://api.census.gov/data/2018/acs/acs5?get=B01003_001E&for=zip%20code%20tabulation%20area:";

async function getZipPopulation(zipcode) {
  try {
    const apiCallUrl = `${url}${zipcode}`;
    const response = await axios.get(apiCallUrl);
    console.log(apiCallUrl, "GET");
    console.log(response.status, "Status");
    console.log(response.data, "Data");
    let zipPopObj = {
      zipcode: response.data[1][1],
      population: response.data[1][0]
    };
    tempArray.push(zipPopObj);
  } catch (error) {
    console.error(error);
  }
}

// let counter = NHZipCodes.length;
// NHZipCodes.forEach(function(zipcode, index) {
//   console.log(zipcode + " started ...");
//   setTimeout(async function() {
//     console.log(index + ": " + zipcode);
//     await getZipPopulation(zipcode);
//     counter -= 1;
//     if (counter === 0) {
//       // console.log(tempArray);
//       // Write the new json data (as a string) to the results.json file
//       fs.writeFile("results.json", JSON.stringify(tempArray), function(err) {
//         if (err) throw err;
//         console.log("Data successfully added.");
//       });
//     }
//   }, zipcode);
// });

// Opens the results.json file
// fs.readFile("results.json", function(err, data) {
//   console.log("Adding data to json");
//   // Parses the text into json
//   let json = JSON.parse(data);
//   console.log(json, "results.json");
//   // Push data to the json array
//   json.push(zipObj, "zipObj");
//   // Write the new json data (as a string) to the results.json file
//   fs.writeFile("results.json", JSON.stringify(json), function(err) {
//     if (err) throw err;
//     console.log("Data successfully added.");
//   });
// });

// const NHZipMock = require("./database/census/population/nh/mock.json");

// Get total population
// let population = 0;
// NHZipMock.items.forEach(item => {
//   const pop = parseInt(item.population);
//   population += pop;
//   console.log(population);
// });
