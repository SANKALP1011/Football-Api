const express = require("express");
const getCountrywiseLeagues = require("./Routes/Country/getLeagueInCountry")
const app = express();
const port = process.env.PORT || "3004"
app.use(express.urlencoded({extended:true}))

app.use(getCountrywiseLeagues)

app.listen(port,(err)=>{
    console.log("server up and running")
})