const { Country, Activity } = require("../db");
const { matchDataAPI } = require("../utils/matchData");

const getCountriesController = async () => {
    const getAllCountries = await Country.findAll();
    if (!getAllCountries.length) {
        await Country.bulkCreate(await matchDataAPI());
    };
    return await Country.findAll({
        where:{}, include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {attributes: []}
        }
    });
};

module.exports = getCountriesController;