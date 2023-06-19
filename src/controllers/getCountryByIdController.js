const { Country, Activity } = require("../db");

const getCountryByIdController = async (id) => {
  const country = await Country.findByPk(id, {
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: { attributes: [] },
    },
  });
  return country;
};

module.exports = getCountryByIdController;