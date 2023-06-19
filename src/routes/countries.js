const { Router } = require("express");
const getCountriesHandler = require("../handlers/getCountriesHandler");
const getCountryByIdHandler = require("../handlers/getCountryByIdHandler");
const getCountryByNameHandler = require("../handlers/getCountryByNameHandler");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/name", getCountryByNameHandler);

countriesRouter.get("/:id", getCountryByIdHandler);

module.exports = countriesRouter;