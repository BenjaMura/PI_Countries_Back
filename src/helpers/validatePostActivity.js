const validate = (req, res, next) => {
    const { name, difficulty, season, countries } = req.body;
    if (!name) return res.status(400).json({ error: "Missing name" });
    if (!difficulty) return res.status(400).json({ error: "Missing difficulty" });
    if (!season) return res.status(400).json({ error: "Missing season" });
    if (!countries.length) return res.status(400).json({ error: "Missing countries" });
    next();
  };

module.exports = validate;