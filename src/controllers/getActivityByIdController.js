const { Country, Activity } = require("../db");

const getActivityByIdController = async (id) => {
  const activity = await Activity.findByPk(id, {
    include: {
      model: Country,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  return activity;
};

module.exports = getActivityByIdController;