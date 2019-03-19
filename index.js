const express = require('express');
const bodyParser = require("body-parser"); //post request
const urlencodedParser = bodyParser.urlencoded({extended: false});
const multer = require('multer');
const port =  process.env.PORT || 3007;
const app = express();
const db = require("./db");

// db.connect("", {name: String, email: String,message: String
//               //,  img: { data: Buffer, contentType: String }
//             });

const storage = db.grid();

const upload = multer({ storage });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/upload', upload.single('file'),  (req, res) => {
  res.redirect('https://www.aayushh.com/Message/');
});

app.get('/', upload.single('file'),  (req, res) => {
  res.send({active: true});
});

const server = app.listen(port, ()=>{console.log(`Server Running on Port:${port}.`); });
