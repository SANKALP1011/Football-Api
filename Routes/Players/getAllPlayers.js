const express = require("express");
const AllPlayerRouter = express.Router();

AllPlayerRouter.
get("/club/players",(req,res)=>{
    res.send("this the route that will fetch the information of all players from a particular club.")
})