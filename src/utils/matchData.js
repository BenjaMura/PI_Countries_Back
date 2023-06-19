const axios = require("axios");

const matchDataAPI = async () => {
  const getCountries = (await axios.get("http://localhost:5000/countries"))
    .data;
  const countries = getCountries.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.png,
      continent: country.continents ? country.continents[0] : "-",
      capital: country.capital ? country.capital[0] : "-",
      subregion: country.subregion ? country.subregion : "-",
      area: country.area ? country.area : "-",
      population: country.population,
    };
  });
  return countries;
};

module.exports = { matchDataAPI };