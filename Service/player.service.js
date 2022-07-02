const express = require("express");
const DbConnection = require("../Database/DatabaseConfig");

module.exports = {
    FetchAllPlayers: callback => {
        const query = "Select * from Players";
        DbConnection.query(query,[],(err,result)=>{
            if(err){
                return callback(err)
            }
            else{
                return callback(null,result)
            }
        })
    },
    FetchPlayersById: (id,callback) =>{
        const query = "Select * from Players where id = ?";
        DbConnection.query(query,[id],(err,results)=>{
            if(err){
                return callback(err)
            }
            else{
                return callback(null,results)
            }
        })
    },
    FetchPlayersByName: (name,callback)=>{
        const query = "Select * from where name = ?";
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