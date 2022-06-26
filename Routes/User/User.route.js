const express = require("express")
const UserRouter = express.Router();
const RegisterUser = require("../../Authentication/user.controller");
const Token = require("../../Authentication/AuthToken/AuthToken")

UserRouter.
post("/Register",Token,RegisterUser)
module.exports = UserRouter