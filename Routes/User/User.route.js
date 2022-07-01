const express = require("express");
const UserRouter = express.Router();
const {Login} = require("../../Controller/user.controller");
const {CreateUser} = require("../../Controller/user.controller")

UserRouter.post("/Register",CreateUser)
UserRouter.post("/Login",Login)


module.exports = UserRouter;