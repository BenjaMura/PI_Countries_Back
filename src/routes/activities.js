const { Router } = require("express");
const getActivitiesHandler = require("../handlers/getActivitiesHandler");
const postActivityHandler = require("../handlers/postActivityHandler");
const deleteActivityHandler = require("../handlers/deleteActivityHandler");
const putActivityHandler = require("../handlers/putActivityHandler");
const validate = require("../helpers/validatePostActivity");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);

activitiesRouter.post("/", validate, postActivityHandler);

activitiesRouter.delete("/:id", deleteActivityHandler);

activitiesRouter.put("/edit/:id", validate, putActivityHandler);

module.exports = activitiesRouter;