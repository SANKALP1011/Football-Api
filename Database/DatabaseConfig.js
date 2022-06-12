const express = require("express");
const mysql = require("mysql");

const DbConnection = mysql.createPool({
    "host": "",
    "password": "",
    "user": "",
    "port": ""
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