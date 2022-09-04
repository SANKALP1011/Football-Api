const express = require("express");
const sequelize = require("sequelize")
const {Sequelize,DataTypes} = require("sequelize");

const UserModel = sequelize.define("User",{
    Id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Email:{
        type: DataTypes.STRING,
        isEmail: true
    },
    Password:{

    }
})

module.exports = UserModel;
