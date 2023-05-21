const express = require("express");
const bodyParser = require("body-parser");
const enviroment = require("./controller/enviroment.controller")

const app = express();
app.use(bodyParser.json());

app.use ("/enviroment", enviroment);



app.use((err, req, res, next) => {
    res.send(err.message);
})


module.exports = app;