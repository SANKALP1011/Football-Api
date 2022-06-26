const jwt = require("jsonwebtoken");
const {hashSync,genSaltSync,compareSync} = require("bcryptjs");
const {createUser} = require("../Authentication/user.model")

module.exports = {
    CreateUser: (data,callback) =>{
        const body = req.body
        const password = req.body.password;
        const salt = genSaltSync(10)
        password = hashSync(password,salt)
        createUser(body,(err,results)=>{
            if(err){
                console.log("error is database")
                return res.status(500).json({
                    success: "No",
                    message: "Database connectivity error"
                })
            }
            else{
                 console.log(results)
                 return res.status(200).json({
                    success: "Yes",
                    message: "Successfully registered user in the database."
                 })
            }
        })
    }
}

