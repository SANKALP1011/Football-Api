const express = require("express");
const joi = require("joi");
const {FetchClubs} = require("../Service/club.service")

module.exports = {
  GetAllClubs: async (req,res)=>{
       FetchClubs((err,results)=>{
        if(err){
          console.log(err)
          return res.status(200).json({
            Success: "No",
            message: err

          })
        }
        else{
          console.log(results);
        }
       }) 
  },
  GetClubsByCountry: async (req,res)=>{
    
  }  
}