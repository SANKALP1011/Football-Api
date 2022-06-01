const express = require("express");
const LeagueRouter = express.Router();

LeagueRouter.
get("/country/:league",(req,res)=>{
    res.send("this is the route to get a specific league by passing the league name to the url parameter.")
})
module.exports = LeagueRouter;