const express = require("express");
const {GetClubsByMaxTro} = require("../Controller/trophies.controller");
const Token = require("../Middleware/AuthToken");
const TrophieRouter = express.Router();

TrophieRouter.
get("/trophies",Token,GetClubsByMaxTro)

module.exports = TrophieRouter;