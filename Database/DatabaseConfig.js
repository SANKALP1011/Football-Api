const express = require("express");
const mysql = require("mysql");
const path = require("path");
require('dotenv').config({ 
    path: path.resolve(__dirname, '../.env') 
  })

const DbConnection = mysql.createPool({
    "host": '127.0.0.1',
    "password": 'mysqldatabase',
    "user": 'root',
    "port": '3306',
})

try{
    DbConnection.getConnection((err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("database connected")
        }
    })
}
catch{
    console.log("some connectivity problem")
}

module.exports = DbConnection