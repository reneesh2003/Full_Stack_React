const express = require("express")
const collection =require("./mongo.js")
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
    console.log(em)
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
    console.log(name)
    try{
    console.log(await collection.updateOne({ email:em}, { $set: {password:password,name:name,mno:mno }}))
    const check = await collection.findOne({email:em})
    console.log(check)
       res.json("updated")
    }
    catch(e){
        res.json("error")
    }
})

app.listen(8000,()=>{
    console.log("port connected")
})