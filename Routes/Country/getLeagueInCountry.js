const express = require("express");
const {Token} = require("../../Authentication/AuthToken/AuthToken")
const {GetAllClubs} = require("../../Controller/clubs.controller")
const CountryRouter = express.Router();

CountryRouter.
get("/country/League",Token,GetAllClubs)

module.exports = CountryRouter;