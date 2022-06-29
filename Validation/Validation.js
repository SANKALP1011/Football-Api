const express = require("express")
const joi = require("joi")

const ValidationSchema = data => {
    const Schema = joi.object({
        Name: joi.string().required(),
        Email: joi.string().email().required(),
        Password: joi.string().min(6).required()
    })
    return Schema.validate(data)
}
module.exports.ValidationSchema = ValidationSchema

const LoginValidation = data =>{
    const Schema = joi.object({
        Email: joi.string().email().required(),
        Password: joi.string().min(6).required()
    })
    return Schema.validate(data)
}
module.exports.LoginValidation = LoginValidation;
    