const express = require("express");
const DbConnection = require("../Database/DatabaseConfig");

module.exports = {
    FetchClubs: (callback) =>{
       const query = "Select * from Clubs";
       DbConnection.query(query,(err,results)=>{
        if(err){
            callback(err)
        }
        else{
            callback(null,results)
        }
       })
 }
}