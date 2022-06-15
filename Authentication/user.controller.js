const jwt = require("jsonwebtoken");
const {hashSync,genSaltSync,compareSync} = require("bcryptjs");
const {createUser} = require("../Authentication/user.model")

const CreateUser = (req,res)=>{
    const name = req.body.name;
    const email = req.body.email
    const password = req.body.password;
}
