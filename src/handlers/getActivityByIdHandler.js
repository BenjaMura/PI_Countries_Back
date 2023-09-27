const getActivityByIdController = require("../controllers/getActivityByIdController");

const getActivityByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const activityDetail = await getActivityByIdController(id);
    if (!activityDetail) throw new Error("Activity unavailable");
    res.status(200).json(activityDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getActivityByIdHandler;