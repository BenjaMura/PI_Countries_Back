const { Country, Activity } = require("../db");

const putActivityController = async (
  name,
  difficulty,
  duration,
  season,
  countries,
  id
  ) => {
  const activity = await Activity.findByPk(id);
  
  activity.update({
    name: name,
    difficulty: difficulty,
    duration: duration,
    season: season,
  })

  const countriesData = await Country.findAll({
    where: {
      name: countries,
    },
  });

  const countryIds = countriesData.map((country) => country.id);
  await activity.setCountries(countryIds);

  return activity;
};

module.exports = putActivityController;