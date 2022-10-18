const express = require("express");
const InitailRoute = express.Router();

InitailRoute.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write(
    "<h1>Welcome to the authenticated football api, use postman to test it out</h1><br>"
  );
  res.write(
    "<h2>Currently, documnetation has not been added for this api</h2>"
  );
  res.send();
});
module.exports = InitailRoute;
