const express = require("express");
const ClubsRouter = express.Router();
const {GetClubsById,GetAllClubs,GetClubsByName} = require("../../Controller/clubs.controller")
const Token = require("../../Middleware/AuthToken");

ClubsRouter.get("/clubs/:id",Token,GetClubsById),
ClubsRouter.get("/clubs",Token,GetAllClubs);
ClubsRouter.get("/clubs/:Clubname",Token,GetClubsByName)

module.exports = ClubsRouter