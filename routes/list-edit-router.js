const express = require("express");
const listEditRouter = express.Router();
const {  mongoDbConnect,client }=require ("../middleware/connect")
require("dotenv").config();
const dbName=process.env.dbName;
const coleccion= process.env.coleccion;
const {ObjectId} = require('mongodb');

// Ruta para crear una nueva tarea
listEditRouter.post('/tareas/create',async (req, res) => {
    const newTask = req.body; // Se espera que la solicitud contenga un objeto de tarea
    try {
      
      await mongoDbConnect();
      const db = client.db(dbName);
      const tareas = db.collection(coleccion);
      const tareas2 = await tareas.insertOne(newTask);
       res.status(201).send("Se creo una Tarea");
    } catch (error) {
      res.json({mensaje:"error al crear tarea"})
    }
   
    
});

// Ruta para eliminar una tarea
listEditRouter.delete('/tareas/delete/:id',async (req, res) => {
  const taskId = new ObjectId (req.params.id);

    try {
      await mongoDbConnect();
      const db = client.db(dbName);
      const tareas = db.collection(coleccion);
      const tareas2 = await tareas.deleteOne({_id: taskId});
      console.log(tareas2);
      if (!tareas2){
        res.status(404).json({ message: "Tarea no encontrada" });
      }else{
        res.json({ message: "Tarea eliminada exitosamente" });
      }
    } catch (error) {
      console.error(error);
      res.json({mensaje:"error al eliminar  tarea"})
    }
    
  
});

// Ruta para actualizar una tarea
listEditRouter.put('/tareas/update/:id',async (req, res) => {
 
  const updatedTask = req.body; // Se espera que la solicitud contenga un objeto de tarea actualizado

  const taskId = new ObjectId (req.params.id);

    try {
      await mongoDbConnect();
      const db = client.db(dbName);
      const tareas = db.collection(coleccion);
      const tareas2 = await tareas.updateOne({ _id: taskId }, { $set: { ...updatedTask }});
      console.log(tareas2);
      if (!tareas2){
        res.status(404).json({ message: "Tarea no encontrada" });
      }else{
        res.json({ message: "Tarea actualizada exitosamente" });
      }
    } catch (error) {
      console.error(error);
      res.json({mensaje:"error al actualizar  tarea"})
    }
});

module.exports = listEditRouter;
