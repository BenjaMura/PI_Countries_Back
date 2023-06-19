const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const postActivityController = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const find = await Activity.findAll({
    where: { name: { [Op.iLike]: name } }});
  
  if (!find.length) {
  const postActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  const countriesData = await Country.findAll({
    where: {
      name: countries,
    },
  });

  const countryIds = countriesData.map((country) => country.id);
  await postActivity.addCountries(countryIds);

  return postActivity;
  }
};

module.exports = postActivityController;