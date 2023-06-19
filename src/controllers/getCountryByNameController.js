const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountryByNameController = async (name) => {
  const countries = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: { attributes: [] },
    },
  });
  return countries;
};

module.exports = getCountryByNameController;