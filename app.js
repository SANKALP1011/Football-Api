const express = require("express");
const app = express();
const path = require("path");
const User = require("./Routes/User/User.route");
const Clubs = require("./Routes/Clubs/clubs.router")
const port = process.env.PORT || "3004"
app.use(express.urlencoded({extended:true}))
app.use(express.json())
require('dotenv').config({ 
    path: path.resolve(__dirname, './.env') 
  })
app.use(Clubs)
app.use(User)



app.listen(port,(err)=>{
    console.log("server up and running")
})