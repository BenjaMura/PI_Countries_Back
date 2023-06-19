const { Activity, Country } = require("../db");

const getActivitiesController = async () => {
    const getAllActivities = await Activity.findAll({where:{}, include: {
            model: Country,
            attributes: ["name", "flag"],
            through: {attributes: []}
        }});
    return getAllActivities;
};

module.exports = getActivitiesController;