const express = require('express');
const bodyParser = require("body-parser"); //post request
const urlencodedParser = bodyParser.urlencoded({extended: false});
const multer = require('multer');
var port = 3001 || process.env.PORT;
const app = express();
var db = require("./db");

db.connect("", {name: String, email: String, message: String});

let uploadSchema = new Schema({
    name: {
      type: String,
    },
    mimetype: {
      type: String,
    },
    size: {
      type: Number,
    },
    base64: {
      type: String,
    }
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/request", urlencodedParser, (req, res)=>{
  data = req.body;
   console.log("Resquest!");
});

const server = app.listen(port, ()=>{console.log(`Server Running on Port:${port}.`); });
