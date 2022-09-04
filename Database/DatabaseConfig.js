const express = require("express");
const mysql = require("mysql");
const path = require("path");
require('dotenv').config({ path: require('find-config')('.env') })
const Sequlize = require("sequelize");

const sequelize = new Sequlize (
    'FootballApi',
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

const Connection = sequelize.authenticate().then(()=>{
    console.log("Database connected successfully");
})
.catch((error)=>{
  console.log(error)
})



const DbConnection = mysql.createPool({
    "host": process.env.DB_HOST,
    "password": process.env.DB_PASS,
    "user": process.env.DB_USER,
    "port": process.env.DB_PORT,
    "database": 'FootballApi'
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

module.exports = Connection;
