const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //post request
const urlencodedParser = bodyParser.urlencoded({extended: false});
const url = "mongodb://aayush6194:poop12@ds041571.mlab.com:41571/portfolio";
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
let dataSchema, data;

module.exports = {
    connect :(collection, obj)=> {
               mongoose.connect(url, { useNewUrlParser: true });
               dataSchema = new mongoose.Schema(obj);
               data = mongoose.model('data', dataSchema);
               console.log("Connected!")
              },

    insert: (obj)=>{
              let temp = new data(obj);
              temp.save((err)=>{ if(err)console.log(err);  console.log("Saved!") });
            },

     find: (obj)=>{
                data.find(obj, (err, res)=>{
                    if(err) console.log(err)
                    console.log(res)
                    });
     },

     grid: ()=>{
       return (new GridFsStorage({
         url: "mongodb://aayush6194:poop12@ds041571.mlab.com:41571/portfolio",
         file: (req, file) => {
           return new Promise((resolve, reject) => {
               const filename = file.originalname;
               const fileInfo = {
                 filename: filename,
                 bucketName: 'uploads'
               };
               resolve(fileInfo);
           });
         }
       }));
     }


}
