const putActivityController = require("../controllers/putActivityController");

const putActivityHandler = async (req, res) => {
  const { id } = req.params;
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const editActivity = await putActivityController(
      name,
      difficulty,
      duration,
      season,
      countries,
      id,
    );
    if (!editActivity) throw new Error("Activity couldn't be modified");
    res.status(200).json(editActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = putActivityHandler;