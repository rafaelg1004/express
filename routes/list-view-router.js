const express = require('express');
const listViewRouter = express.Router();
let tasks=require("../data");
 
listViewRouter.get('/tareas/', (req, res) => {
  res.status(200).send(tasks);
});
listViewRouter.get("/tareas/id/:id",(req, res)=>{
  const idtask= req.params.id;
  console.log(idtask);
  const dataTasks =tasks.find((item)=>item.id==idtask)
  res.status(200).send(dataTasks);
});

// Ruta para listar tareas completas
listViewRouter.get('/tareas/completed', (req, res) => {
  const completedTasks = tasks.filter(task => task.isCompleted);
  res.json(completedTasks);
});

// Ruta para listar tareas incompletas
listViewRouter.get('/tareas/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = listViewRouter;
