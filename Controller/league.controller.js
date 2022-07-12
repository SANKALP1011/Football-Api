const express = require("express");
const {FetchAllLeagues,FetchLeagueById,FetchLeagueByName} = require("../Service/league.service");
const {NameValidataion,IdValidation} = require("../Validation/Validation");


module.exports = {
    GetAllLeagues: async (req,res)=>{
      FetchAllLeagues((err,results)=>{
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
    GetLeagueById: async (req,res)=>{
        const body = req.body;
        const id = body.id;
        const {error} = NameValidataion(id)
        if(error){
            return res.status(200).json({
                Success: "No",
                message: error.details[0].message
            })
        }
        else{
            FetchLeagueById(id,(err,results)=>{
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
        }
       
    },
    GetLeagueByName: async (req,res)=>{
        const body = req.body;
        const name = body.name;
        FetchLeagueByName(name,(err,result)=>{
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
