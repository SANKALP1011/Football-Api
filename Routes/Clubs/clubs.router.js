const express = require("express");
const ClubsRouter = express.Router();
const {GetClubsById,GetAllClubs} = require("../../Controller/clubs.controller")
const Token = require("../../Authentication/AuthToken/AuthToken");

ClubsRouter.get("/clubs/:id",Token,GetClubsById),
ClubsRouter.get("/clubs",Token,GetAllClubs);
ClubsRouter.get("/clubs/:Clubname",Token)

module.exports = ClubsRouter