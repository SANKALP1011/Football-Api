const express = require("express");

module.exports = (sequelize,DataTypes) =>{
  const ClubModel = sequelize.define("Club",{
    Name:{
      type: DataTypes.STRING,
      allowNull: false
      },
    Legue:{
      type: DataTypes.STRING
    },
    Players:{
     type: DataTypes.STRING
    }
  })
  return ClubModel;
}
