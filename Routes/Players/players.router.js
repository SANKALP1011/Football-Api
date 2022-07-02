const express = require("express");
const {GetAllPlayers,GetPlayersByName,GetPlayersId} = require("../../Controller/players.controller")
const PlayerRouter = express.Router();

PlayerRouter.get("/players",GetAllPlayers);
PlayerRouter.get("/players/:id",GetPlayersId);
PlayerRouter.get("/players/:name",GetPlayersByName);

module.exports = PlayerRouter