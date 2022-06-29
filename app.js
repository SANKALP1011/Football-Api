const express = require("express");
const app = express();
const path = require("path");
const getCountrywiseLeagues = require("./Routes/Country/getLeagueInCountry")
const RegisterUser = require("./Routes/User/Register.route")
const LoginUser = require("./Routes/User/Login.route");
const port = process.env.PORT || "3004"
app.use(express.urlencoded({extended:true}))
app.use(express.json())
require('dotenv').config({ 
    path: path.resolve(__dirname, './.env') 
  })

app.use(RegisterUser)
app.use(LoginUser)
app.use(getCountrywiseLeagues)


app.listen(port,(err)=>{
    console.log("server up and running")
})