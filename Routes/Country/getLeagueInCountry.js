const express = require("express");
const AuthToken = require("../../Authentication/AuthToken/AuthToken")
const {GetAllClubs} = require("../../Controller/clubs.controller")
const CountryRouter = express.Router();

CountryRouter.
get("/country/League",GetAllClubs)

module.exports = CountryRouter;