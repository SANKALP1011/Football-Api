const express = require("express");
const PlayerNameRouter = express.Router();

PlayerNameRouter.
get("/club/:player",(req,res)=>{
    res.send("this is the route for fetching the the specific player information that is passed in the url parameter.")
})
module.exports = PlayerNameRouter;