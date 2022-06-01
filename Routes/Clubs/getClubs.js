const express = require("express");
const ClubRouter = express.Router();

ClubRouter.
get("/Leagues/Clubs",(req,res)=>{
    res.send("this is the route to get clubs in a legue")
})
module.exports = ClubRouter;