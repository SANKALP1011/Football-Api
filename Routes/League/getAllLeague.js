const express = require("express");
const AllLeagueRouter = express.Router();

AllLeagueRouter.
get("/allLeague",(req,res)=>{
    res.send("this is the route that will fetch all the league information from the database");
})
module.exports = AllLeagueRouter;