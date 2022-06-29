const express = require("express");
const LoginRoute = express.Router();
const {Login} = require("../../Controller/user.controller");

LoginRoute.
post("/Login",Login)

module.exports = LoginRoute;