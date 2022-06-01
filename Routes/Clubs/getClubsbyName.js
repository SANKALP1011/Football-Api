const express = require("express");
const { send } = require("express/lib/response");
const ClubNameRouter = express.Router();

ClubNameRouter.
get("/league/:club",(req,res)=>{
    res,send("this is the api route to get the specifc club by passing the parameter to the route.")
})
module.exports = ClubNameRouter;