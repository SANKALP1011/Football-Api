const express = require("express");
const InitailRoute = express.Router();

InitailRoute.get("/", (req, res) => {
  res.write(
    "Welcome to the authenticated football api, use postman to test it out."
  );
  res.write("Currently, documnetation has not been added for this api.");
  res.send();
});
module.exports = InitailRoute;
