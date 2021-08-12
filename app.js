const express = require("express");
const app = express();

//middlewares-->
app.use(express.json());
//routes-->
app.use("api/v1/users", someUserRoute);

module.exports = app;
