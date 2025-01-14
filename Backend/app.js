const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();
const cookiesParser =  require("cookie-parser");
const connectToDb = require("./db/db");

const userRoutes =  require("./routes/user.routes");
const captainsRoutes =  require("./routes/captain.routes");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

app.get('/',(req, res) => {
    res.send("Hello Backend");
})
app.use('/users',userRoutes)
app.use('/captain',captainsRoutes)

module.exports = app;