const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
const newSchema= new mongoose.Schema({
    email: {type:String,required:true},
    password: {type:String,required:true},
    name: {type:String,required:true},
    mno: {type:String,required:true}
  });

  const collection= mongoose.model("collection",newSchema);
  module.exports = collection