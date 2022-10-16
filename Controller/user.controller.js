const { createUser, LoginUser } = require("../Service/user.service");
const { RegistrationValidation } = require("../Validation/Validation");
const { LoginValidation } = require("../Validation/Validation");
const { sign } = require("jsonwebtoken");
const Hash = require("password-hash");

module.exports = {
  CreateUser: async (req, res) => {
    const body = req.body;
    body.Password = Hash.generate(body.Password);

    const { error } = RegistrationValidation(req.body);
    if (error) {
      return res.status(400).json({
        error: "Yes",
        message: error.details[0].message,
      });
    } else {
      createUser(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: "No",
            message: "Database connectivity error",
          });
        } else {
          console.log(results);
          return res.status(200).json({
            success: "Yes",
            message: "Successfully registered user in the database.",
            Further:
              "You can use this credentials to login and use the auth token to access the other routes",
          });
        }
      });
    }
  },
  Login: (req, res) => {
    const body = req.body;
    const email = body.Email;
    LoginUser(email, (err, results) => {
      if (err) {
        res.status(500).json({
          Success: "No",
          message: "Connectivity error",
        });
      }
      if (!results) {
        res.status(500).json({
          Success: "Yes",
          message: "Email not found/Invalid Email/Wrong Login credentials",
        });
      }
      console.log(results);
      const PasswordValidation = Hash.verify(
        body.Password,
        results[0].Password
      );
      console.log(PasswordValidation);
      if (PasswordValidation) {
        const LoginToken = sign({ PasswordValidation: results }, "demo12312", {
          expiresIn: 864000,
        });
        return res.status(200).json({
          Succes: "Yes",
          Token: LoginToken,
          message: "You can use this token to access the routes",
        });
      } else {
        return res.status(500).json({
          Success: "No",
          message: "Please check whether the email is registered or not",
        });
      }
    });
  },
};
