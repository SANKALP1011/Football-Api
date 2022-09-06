const express = require("express");

module.exports = (sequelize,DataTypes) =>{
    const UserModel = sequelize.define("User",{
        Id:{
            type: sequelize.UUID,
            defaultValue: sequelize.UUIDV4,
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
    return UserModel;
}


