const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.get('/',(req, res) => {
    res.send("Hello Backend");
})

module.exports = app;