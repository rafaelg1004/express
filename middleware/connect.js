const {MongoClient} =require("mongodb");
require("dotenv").config();
const uri=process.env.MONGO_URI;
const client =new MongoClient(uri,{useNewUrlParser:true});
async function mongoDbConnect(req, res, next){
  try {
      await client.connect();
     
  //await client.db("admin").command({ping:1});
  console.log("Base de Datos Conectada")
   
  } catch (error) {
      
      console.log(error);
      await client.close();
  }
  
}
module.exports ={ mongoDbConnect, client };