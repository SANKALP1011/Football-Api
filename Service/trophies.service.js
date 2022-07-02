const express = require("express");
const DbConnection = require("../Database/DatabaseConfig");

module.exports = {
    MaxTrophies: callback =>{
        const query = "Select * from Trophies";
        DbConnection.query(query,[],(err,result)=>{
            if(err){
                return callback(err)
            }
            else{
                return callback(null,result)
            }
        })
    }
}