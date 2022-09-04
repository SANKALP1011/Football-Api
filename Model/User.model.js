const express = require("express");
const sequelize = require("../Database/DatabaseConfig").sequelize
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
        allowNull: false,
        validate: {
            isAlpha: true
        }
    },
    Email:{
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    Password:{
       type: DataTypes.NUMBER,
       validate: {
        isNum: true
       }
    }
})

const s = sequelize.sync({force:true}).then(()=>{
    console.log("Table created")
})
.catch(()=>{
    console.log("Not created")
})

module.exports = s;
