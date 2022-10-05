const express = require("express");
const LeagueRouter = express.Router();
const {
  GetAllLeagues,
  GetLeagueByName,
  GetLeagueById,
} = require("../Controller/league.controller");

LeagueRouter.get("/league", GetAllLeagues);
LeagueRouter.get("/league/:id", GetLeagueById);
LeagueRouter.get("/league/:name", GetLeagueByName);

module.exports = LeagueRouter;
