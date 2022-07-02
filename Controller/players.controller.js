const express = require("express");
const {FetchAllPlayers,FetchPlayersById,FetchPlayersByName} = require("../Service/player.service");

module.exports = {
    GetAllPlayers: async (req,res)=>{
        FetchAllPlayers((err,results)=>{
            if(err){
                return res.status(200).json({
                    Success: "No",
                    message: err
                })
            }
            else{
                return res.status(500).json({
                    Success: "Yes",
                    message: results
                })
            }
        })
    },
    GetPlayersId: async (req,res)=>{
        const body = req.body;
        const id = body.id;
        FetchPlayersById(id,(err,result)=>{
            if(err){
                return res.status(200).json({
                    Success: "Yes",
                    message: err
                })
            }
            else{
                return res.status(500).json({
                    Success: "Yes",
                    message: result
                })
            }
        })
    },
    GetPlayersByName: async (req,res)=>{
         const body = req.body;
         const name = body.name;
         FetchPlayersByName(name,(err,result)=>{
              if(err){
                return res.status(200).json({
                    Success: "No",
                    message: err
                })
              }
              else{
                return res.status(500).json({
                    Success: "Yes",
                    message: result
                })
              }
         })
    }
}