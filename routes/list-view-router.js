const express = require('express');
//const app =express();
const listViewRouter = express.Router();
const {  mongoDbConnect,client }=require ("../middleware/connect")
require("dotenv").config();
const dbName=process.env.dbName;
const coleccion= process.env.coleccion;
const {ObjectId} = require('mongodb');
//const handleViewErrors = require('../middleware/view-param-handler');
//app.use(express.json());
// Dependencia requerida para hacer la conversión de string a ObjectId

//app.use(handleViewErrors);
 
listViewRouter.get('/tareas/',async (req, res) => {
 try {
  await mongoDbConnect();
  const db = client.db(dbName);
  const tareas = db.collection(coleccion);
  const tareas2 = await tareas.find({}).toArray();
  res.status(200).send(tareas2);
 } catch (error) {
  console.error(error);
      res.status(500).json({ message: 'Error al obtener las tareas' });
 }
});

listViewRouter.get("/tareas/id/:id",async(req, res)=>{
  const id =req.params.id
  const idleng=id.length;
  if (idleng===24){
    try {
    
      const idtask= new ObjectId(id) ;
      console.log (idtask);
    
      await mongoDbConnect();
      
      const db = client.db(dbName);
      const tareas = db.collection(coleccion);
      const dataTasks =await tareas.findOne({_id:idtask});
      console.log(dataTasks)
      if(!dataTasks){
        res.json({mensaje:"id no encontrado"})
      }
      res.status(200).json(dataTasks);
    } catch (error) {
      console.error(error);
      res.status(401).json({error})
    }
  }else{
    res.status(401).json({mensaje:"Id no es correcto"})
  }
  
 
});

// Ruta para listar tareas completas
listViewRouter.get('/tareas/completed',async (req, res) => {
  //const comple= true;
  try {
    await mongoDbConnect();
    
    const db = client.db(dbName);
    const tareas = db.collection(coleccion);
    const dataTasks =await tareas.find({completado:true}).toArray();
    if(dataTasks.length ===0){
      res.status(400).json({mensaje:"no existen tareas completadas"});
    }else{
      console.log(dataTasks);
    res.status(200).send(dataTasks);
    }

    
    
  } catch (error) {
    res.send("Error")
  }
  
  
});

// Ruta para listar tareas incompletas
listViewRouter.get('/tareas/incomplete',async (req, res) => {
  const comple =false;
  try {
    await mongoDbConnect();
    
    const db = client.db(dbName);
    const tareas = db.collection(coleccion);
    const dataTasks =await tareas.find({ completado : comple  }).toArray();
    console.log(dataTasks)
    res.status(200).send(dataTasks);
    
  } catch (error) {
    
  }
});

module.exports = listViewRouter;
