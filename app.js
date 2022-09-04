const express = require("express");
const app = express();
const path = require("path");
const swaggerJsDocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const User = require("./Routes/User.routes");
const League = require("./Routes/league.router")
const Clubs = require("./Routes/clubs.router")
const Players = require("./Routes/players.router")
const Trophie = require("./Routes/trophies.router")
const connect = require("./Database/DatabaseConfig")

const port = process.env.PORT || "3004"
app.use(express.urlencoded({extended:true}))
app.use(express.json())
require('dotenv').config({ 
    path: path.resolve(__dirname, './.env') 
  })

  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Football Api',
      version: '1.0.0',
      description: 'This is an user aunthenticated football api where once the user registers and logins with the same  credentials , user would get a access token which ca help user to access the football api routes.',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Sankalp',
        url: 'https://portfolio-site-sankalp1011.vercel.app/',
      },
    },
    servers: [
      {
        url: "http://localhost:3004",
        description: 'Production Server',
      }
      ],
  };

const swaggerDocs = 
{
  swaggerDefinition,
  apis: [`${__dirname}/Routes/*.js`]
}

var options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

const swaggerConfifg = swaggerJsDocs(swaggerDocs)

app.use("/v1",swaggerUi.serve,swaggerUi.setup(swaggerConfifg,options))

app.use(Clubs)
app.use(User)
app.use(League)
app.use(Players)
app.use(Trophie)

console.log("kjkjkj")

console.log("jjkljkl")

app.use(getCountrywiseLeagues)

app.listen(port,(err)=>{
    console.log("server up and running")
})