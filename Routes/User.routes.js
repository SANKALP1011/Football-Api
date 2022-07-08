const express = require("express");
const UserRouter = express.Router();
const {CreateUser,Login} = require("../Controller/user.controller")

UserRouter.post("/Register",CreateUser)
UserRouter.post("/Login",Login)


module.exports = UserRouter;