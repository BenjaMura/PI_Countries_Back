const { Router } = require("express");
// Importo los routers
const countriesRouter = require("./countries");
const activitiesRouter = require("./activities");

// Configuro los routers
const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;