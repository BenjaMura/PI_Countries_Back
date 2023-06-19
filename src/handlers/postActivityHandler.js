const postActivityController = require("../controllers/postActivityController");

const postActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const newActivity = await postActivityController(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    if (!newActivity) throw new Error("Activity couldn't be created");
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postActivityHandler;