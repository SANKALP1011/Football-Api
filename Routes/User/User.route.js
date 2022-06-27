const express = require("express")
const UserRouter = express.Router();
const {CreateUser} = require("../../Authentication/user.controller")
const Token = require("../../Authentication/AuthToken/AuthToken")

UserRouter.
post("/Register",CreateUser)
module.exports = UserRouter