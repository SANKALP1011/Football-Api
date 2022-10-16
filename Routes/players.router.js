const express = require("express");
const {
  GetAllPlayers,
  GetPlayersByName,
  GetPlayersId,
} = require("../Controller/players.controller");
const token = require("../Middleware/AuthToken.js");
const PlayerRouter = express.Router();

PlayerRouter.get("/players", token, GetAllPlayers);
PlayerRouter.get("/players/:id", token, GetPlayersId);
PlayerRouter.get("/players/:name", token, GetPlayersByName);

module.exports = PlayerRouter;
