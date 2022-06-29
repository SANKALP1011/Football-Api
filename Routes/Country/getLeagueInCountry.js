const express = require("express");
const {Token} = require("../../Authentication/AuthToken/AuthToken")
const CountryRouter = express.Router();

CountryRouter.
get("/country/League",(req,res)=>{
    res.send("this is the league whihch is held in country")
})

module.exports = CountryRouter;