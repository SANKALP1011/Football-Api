const express = require("express");
const DbConfig = require("../Database/DatabaseConfig");
const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    DbConfig.database,
    DbConfig.user,
    DbConfig.password,{
        host: DbConfig.host,
        dialect: DbConfig.dialect,
    }
);

sequelize.authenticate().then(()=>{
    console.log("Database connected");
})
.catch(()=>{
    console.log("Error")
})

const database = {};
database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.Users = require("./User.model")(sequelize,DataTypes);
database.League = require("./League.model")(sequelize,DataTypes);
database.Clubs = require("./Club.model")(sequelize,DataTypes);
database.Players = require("./Player.model")(sequelize,DataTypes);

database.sequelize.sync({force:false})
.then(()=>{
    console.log("Table created");
})
.catch((err)=>{
    console.log(err)
});

/* Realations between tables */

database.League.hasMany(database.Clubs,{
    as: 'Clubs'
});

database.Clubs.hasMany(database.Players,{
    as: 'Players'
})

module.exports = database;