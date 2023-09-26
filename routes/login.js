const express = require('express');
const loginRouter = express.Router();
const jwt =require("jsonwebtoken");
let usuarios= require("../usuarios");

require("dotenv").config();  

loginRouter.post("/login", (req,res)=>{
    let email= req.body.email;
         
    const valiusuarios =usuarios.find((item)=>item.email === email)
     
    if (!valiusuarios)res.status(401).send({ error: "Invalid user name or password"});
    else{
       const token =jwt.sign(valiusuarios,process.env.SECRET);
       console.log(token);
      res.status(200).send("Bienvenido  a la Plataforma");
    }
})
module.exports =loginRouter;