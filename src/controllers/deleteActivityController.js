const { Activity } = require("../db");

const deleteActivityController = async (id) => {
    const activityToDelete = await Activity.findByPk(id)
    await activityToDelete.destroy()
    return {
        message: "Activity successfully deleted"
    };
};

module.exports = deleteActivityController;