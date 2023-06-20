const express = require("express")
const {details ,collection,orders} = require("./mongo.js")

const cors = require('cors')
const e = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.get('/',cors(),(req,res)=>{
})

app.post("/",async(req,res)=>{
    const{email,password}=req.body
    global.em=email
    try{
        const check = await collection.findOne({email:email,password:password})
        if(check){
            res.json(check)
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/signup",async(req,res)=>{
    const{email,password,name,mno}=req.body
    global.em=email
    const data={
        email:email,
        password:password,
        name:name,
        mno:mno
    }
    try{
        const check = await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/home/account",async(req,res)=>{
    try{
    const check = await collection.findOne({email:em})
       res.json(check)
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/home/account/update",async(req,res)=>{
    const{password,name,mno}=req.body
    try{
    await collection.updateOne({ email:em}, { $set: {password:password,name:name,mno:mno }})
    const check = await collection.findOne({email:em})
       res.json(check)
    }
    catch(e){
        res.json("error")
    }
})


app.post("/home/product/checkout",async(req,res)=>{
    const{p}=req.body
    const check = await details.findOne({product:p})
    try{
       res.json(check)
    }
    catch(e){
        res.json("error")
    }
})

app.post("/home/product",async(req,res)=>{
    const{p}=req.body
    const check = await details.findOne({product:p})
    try{
       res.json(check)
    }
    catch(e){
        res.json("error")
    }
})

app.post("/home/product/donecheckout",async(req,res)=>{
    const{p,addr}=req.body
    const data={
        email:em,
        product:p,
        address:addr
    }
    orders.insertMany([data])
    const check = await collection.findOne({email:em})
    try{
       res.json(check)
    }
    catch(e){
        res.json("error")
    }
})

app.listen(8000,()=>{
    console.log("port connected")
})