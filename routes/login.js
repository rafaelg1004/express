const express = require('express');
const loginRouter = express.Router();
const jwt =require("jsonwebtoken");
const {  mongoDbConnect,client }=require ("../middleware/connect")
require("dotenv").config();
const dbName=process.env.dbName;
const coleccion= process.env.coleccion2;
//const {ObjectId} = require('mongodb');

require("dotenv").config();  

loginRouter.post("/login",async (req,res)=>{
    let email= req.body.email; 
    try {
      await mongoDbConnect();
    const db = client.db(dbName);
    const tareas = db.collection(coleccion);
    const dataTasks =await tareas.findOne({email:email});
    console.log(dataTasks)
    
     
    if (!dataTasks)res.status(401).send({ error: "Invalid user name or password"});
    else{
       const token =jwt.sign(dataTasks,process.env.SECRET);
       
      res.status(200).send({token: token});

    }
    } catch (error) {
      
    } 
    
})
module.exports =loginRouter;