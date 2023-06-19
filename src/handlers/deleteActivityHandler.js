const deleteActivityController = require("../controllers/deleteActivityController");

const deleteActivityHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteActivity = await deleteActivityController(id);
    if (!deleteActivity) throw new Error("Activity couldn't be deleted");
    res.status(201).json(deleteActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteActivityHandler;