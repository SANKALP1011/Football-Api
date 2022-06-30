const express = require("express")
const jwt = require("jsonwebtoken")


const AuthToken = (req,res,next)=>{
    const demoToken = "demo12312";
    let token = req.Headers.Authorization;
    if(token){
        token = token.slice(5);
        jwt.verify(token,demoToken,(err,decodeToken)=>{
            if(err){
                console.log(err)
                return res.json({
                    success: "No",
                    message: "Your token is invalid , please try with valid token"
                })
            }
            else{
                console.log(decodeToken)
                 req.decoded = decodeToken;
                 next();
            }
        });
    }
    else{
        console.log("error")
        return res.json({
            success: "No",
            message: "You are unathenticated , please try again"
        })
    }
}
module.exports = AuthToken