const getCountriesController = require("../controllers/getCountriesController");

const getCountriesHandler = async (req, res) => {
  try {
    const allCountries = await getCountriesController();
    if (!allCountries.length)
      throw new Error("Countries aren't available");
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
};

module.exports = getCountriesHandler;