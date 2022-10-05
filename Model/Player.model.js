const express = require("express");

module.exports = (sequelize, DataTypes) => {
  const PlayerModel = sequelize.define("Player", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Club: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return PlayerModel;
};
