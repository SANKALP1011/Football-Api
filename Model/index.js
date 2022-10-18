// const express = require("express");
// const DbConfig = require("../Database/DatabaseConfig");
// const { Sequelize, DataTypes } = require("sequelize");
// require("dotenv").config({ path: require("find-config")(".env") });

// const sequelize = new Sequelize(
//   "FootballApi",
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//   }
// );

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch(() => {
//     console.log("Error");
//   });

// const database = {};
// database.Sequelize = Sequelize;
// database.sequelize = sequelize;

// database.Users = require("./User.model")(sequelize, DataTypes);
// database.League = require("./League.model")(sequelize, DataTypes);
// database.Clubs = require("./Club.model")(sequelize, DataTypes);
// database.Players = require("./Player.model")(sequelize, DataTypes);

// database.sequelize
//   .sync()
//   .then(() => {
//     console.log("Table created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// /* Realations between tables */

// database.League.hasMany(database.Clubs, {
//   as: "Clubs",
// });

// database.Clubs.hasMany(database.Players, {
//   as: "Players",
// });

// module.exports = database;
