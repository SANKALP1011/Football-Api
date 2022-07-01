const express = require("express");
const joi = require("joi");
const {FetchClubs} = require("../Service/club.service")

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
  // GetClubsByCountry: async (req,res)=>{
    
  // }  
}