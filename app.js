const express = require("express");
const getCountrywiseLeagues = require("./Routes/Country/getLeagueInCountry")
const app = express();
const env = require('./')
const path = require("path");
const DbConnection = require("./Database/DatabaseConfig");
const RegisterUser = require("./Routes/User/User.route")
const port = process.env.PORT || "3004"
app.use(express.urlencoded({extended:true}))
require('dotenv').config({ 
    path: path.resolve(__dirname, './.env') 
  })

app.use(RegisterUser)
app.use(getCountrywiseLeagues)

app.listen(port,(err)=>{
    console.log("server up and running")
})