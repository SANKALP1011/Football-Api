const express = require("express");
const joi = require("joi");
const {FetchClubs,FetchClubsById,FetchClubsByName} = require("../Service/club.service")
const {NameValidataion,IdValidation} = require("../Validation/Validation")

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
    const {error} = IdValidation(id);
    if(error){
      return res.status(200).json({
        Success: "No",
        message: error.details[0].message
      })
    }
    else{
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
    }
    
},
  GetClubsByName: async (req,res)=>{
      const body = req.body;
      const name = body.name;
      const {error} = NameValidataion(name)
      if(error){
       return res.status(200).json({
        Success: "No",
        message: error.details[0],message
       })
      }
      else{
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
}