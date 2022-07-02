const express = require("express");
const DbConnection = require("../Database/DatabaseConfig");

module.exports = {
  FetchAllLeagues: callback =>{
    const query = "Select * from Leagues";
    DbConnection.query(query,[],(err,result)=>{
        if(err){
            return callback(err);
        }
        else{
            return callback(null,result)
        }
    })
  },
  FetchLeagueById: (id,callback) =>{
    const query = "Select * from League where id = ?";
    DbConnection.query(query,[id],(err,result)=>{
        if(err){
            return callback(err)
        }
        else{
            return callback(null,result)
        }
    })
  },
  FetchLeagueByName: (name,callback)=>{
    const query = "Select * from League where name = ?";
    DbConnection.query(query,[name],(err,result)=>{
        if(err){
            return callback(err)
        }
        else{
            return callback(null,result)
        }
    })
  }
}