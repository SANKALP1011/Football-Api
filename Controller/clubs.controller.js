const express = require("express");
const joi = require("joi");
const {FetchClubs,FetchClubsById,FetchClubsByName} = require("../Service/club.service")

module.exports = {
  GetAllClubs: (req,res)=>{
   FetchClubs((err,results)=>{
        if(err){
          return res.status(200).json({
            Success: "No",
            message: err
            })
        }
            return res.json({
              Success: "Yes",
              message: results
             })
        
       }) 
  },
  GetClubsById: async (req,res)=>{
    const body = req.body;
    const id = body.id;
    FetchClubsById(id,(err,results)=>{
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
  GetClubsByName: async (req,res)=>{
      const body = req.body;
      const name = body.name;
      FetchClubsByName(name,(err,results)=>{
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
}