const jwt =require("jsonwebtoken");
require("dotenv").config();
const JWTValidation=(req,res,next)=>{
    const headerToken = req.headers.authorization;
    console.log({headerToken});
    if(!headerToken){
     res.json({mensaje:"Token Vacio "});
    }
     
     jwt.verify(headerToken,process.env.SECRET,(error,Token)=>{

        if (error) {
            return res.send("Token Invalido");
        }

     });
    
    next();

   } 
   
  module.exports =JWTValidation; 