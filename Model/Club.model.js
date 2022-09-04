const express = require("express");
const sequelize = require("sequelize");
const {Sequelize,DataTypes} = require("sequelize");

const ClubModel = sequelize.define("Club",{
  Name:{
    type: DataTypes.STRING,
    
  }
})
module.exports = ClubModel