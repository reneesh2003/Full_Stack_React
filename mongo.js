const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://reneeshdenny:reneesh2003@cluster1.dqas7g2.mongodb.net/?retryWrites=true&w=majority');
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
  const product_Schema = new mongoose.Schema({});
  const Order_Schema = new mongoose.Schema({
      email: {type:String,required:true},
    product: {type:String,required:true},
    address: {type:String,required:true}
  });
  const collection= mongoose.model("collection",newSchema);
  const orders= mongoose.model("orders",Order_Schema);
   const details= mongoose.model("product_details",product_Schema);
  module.exports = {details,collection,orders}