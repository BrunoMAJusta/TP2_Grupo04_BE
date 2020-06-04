const express = require("express");
const bodyParser = require("body-parser");
const validator = require('express-validator')
const cors = require("cors");
const config = require("./config.json");
const userRouter = require("./routes/userRouter");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.use(userRouter);


app.listen(config.port, () => console.log(config.serverStartMessage,config.host, config.port));