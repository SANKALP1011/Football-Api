const express = require("express");
const LeagueRouter = express.Router();
const {
  GetAllLeagues,
  GetLeagueByName,
  GetLeagueById,
} = require("../Controller/league.controller");
const token = require("../Middleware/AuthToken");

LeagueRouter.get("/league", token, GetAllLeagues);
LeagueRouter.get("/league/:id", token, GetLeagueById);
LeagueRouter.get("/league/:name", token, GetLeagueByName);

module.exports = LeagueRouter;
