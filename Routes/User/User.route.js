const express = require("express")
const UserRouter = express.Router();
const {CreateUser,Login} = require("../../Controller/user.controller")
const Token = require("../../Authentication/AuthToken/AuthToken")

UserRouter.
post("/Register",CreateUser)
UserRouter.
post("/Login",Login)
module.exports = UserRouter