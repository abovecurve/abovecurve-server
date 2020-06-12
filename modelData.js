// Import the raw dataset
const usCensusMalePoPByStateAge = require("./database/census/population/malePopByAgeState.json");
// console.log(usCensusMalePoPByStateAge[0]);

// citation format
// Pew Hispanic Center. (2008). 2007 Hispanic Healthcare Survey [Data file and code book]. Retrieved from http://pewhispanic.org/datasets/
// Author/Rightsholder. (Year). Title of data set (Version number) [Description of form]. Retrieved from http:// 

const populationDataset = {
  _metadata: {
    citation: {
      author: "United States Census Bureau",
      year: "2018",
      title: "ACS 5-Year Detailed Tables",
      version: "",
      description: "",
      source: "https://api.census.gov/data/2018/acs/acs5",
      print: "United States Census Bureau. (2018). ACS 5-Year Detailed Tables []. Retrieved from https://api.census.gov/data/2018/acs/acs5"
    }
  },
  
}