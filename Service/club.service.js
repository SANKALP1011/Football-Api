const express = require("express");
const DbConnection = require("../Database/DatabaseConfig");

module.exports = {
    FetchClubs: callback =>{
       const query = "Select * from Clubs";
       DbConnection.query(query,[],(err,results)=>{
        if(err){
           return callback(err)
        }
        else{
          return callback(null,results)
        }
       })
 }
}