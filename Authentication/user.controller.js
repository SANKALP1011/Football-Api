const jwt = require("jsonwebtoken");
const {hashSync,genSaltSync,compareSync} = require("bcryptjs");
const {createUser} = require("../Authentication/user.model")
const {ValidationSchema} = require("../Validation/Validation")

module.exports = {
    CreateUser:  (req,res) =>{
        const body = req.body
        const password = req.body.password;
        console.log(password)
        // const salt =  genSaltSync(10)
        // password =  hashSync(password,salt)
          
        const {error} = ValidationSchema(req.body)
        if (error){
            return res.status(400).json({
                error: "Yes",
                message: error.details[0].message
            })
        }
        else{
            createUser(body,(err,results)=>{
                if(err){
                    console.log(err)
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
    }


