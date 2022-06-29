const {hashSync,genSaltSync,compareSync, compare} = require("bcryptjs");
const {createUser,LoginUser} = require("../Service/user.service")
const {RegistrationValidation} = require("../Validation/Validation")
const {LoginValidation} = require("../Validation/Validation")
const {sign} = require("jsonwebtoken")

module.exports = {
    CreateUser: async (req,res) =>{
        const body =  req.body
         const Salt =  genSaltSync(10);
         body.Password = hashSync(body.Password,Salt)
          
        const {error} = RegistrationValidation(req.body)
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
        },
    Login:  (req,res)=>{
        const body = req.body
        const email = body.Email;
        console.log(email)
        console.log(body.Password)
        LoginUser(email,(err,results)=>{
            if(err){
                res.status(500).json({
                    Success: "No",
                    message: "Connectivity error"
                })
            }
            if(!results){
                res.status(500).json({
                    Success: "Yes",
                    message: "Email not found/Invalid Email/Wrong Login credentials"
                })
            }
            console.log(results)
               const PasswordValidation = compare(body.Password,results.Password);
                if(PasswordValidation){
                    results.Password = undefined
                    const LoginToken = sign({PasswordValidation: results},"demo12312",{
                        expiresIn: 864000 
                    })
                    return res.status(200).json({
                        Succes: "Yes",
                        Token : LoginToken,
                        message: "You can use this token to access the routes"
                    })
                }
                else{
                    return res.status(500).json({
                        Success: "No",
                        message: "Please check whether the email is registered or not"
                    })
                }
            }
        )
    }

    }


