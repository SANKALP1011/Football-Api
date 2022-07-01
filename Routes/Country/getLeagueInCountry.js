const express = require("express");
const AuthToken = require("../../Authentication/AuthToken/AuthToken")
const {GetAllClubs} = require("../../Controller/clubs.controller")
const CountryRouter = express.Router();

CountryRouter.
get("/country/League",AuthToken,GetAllClubs)

module.exports = CountryRouter;