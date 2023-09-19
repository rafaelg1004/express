const express = require('express');
const listEditRouter = express.Router();
let tasks = require("../data");

// Ruta para crear una nueva tarea
listEditRouter.post('/tareas/create', (req, res) => {
    const newTask = req.body; // Se espera que la solicitud contenga un objeto de tarea
    //newTask.id = Date.now().toString(); // Asigna un ID único (en este caso, la marca de tiempo)
    tasks.push(newTask);
    res.status(200).send("Se creo una Tarea");
});

// Ruta para eliminar una tarea
listEditRouter.delete('/tareas/delete/:id', (req, res) => {
  const taskId = req.params.id;
 let delteTasks= tasks.filter((task )=> task.id !== taskId);
 console.log(delteTasks);
  tasks = delteTasks;
  res.json({ message: "Tarea eliminada exitosamente" });
});

// Ruta para actualizar una tarea
listEditRouter.put('/tareas/update/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body; // Se espera que la solicitud contenga un objeto de tarea actualizado

  let taskUpdated = false;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      tasks[i] = { ...tasks[i], ...updatedTask };
      taskUpdated = true;
      break;
    }
  }

  if (!taskUpdated) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }


  
  res.json({ message: "Tarea actualizada exitosamente" });
});

module.exports = listEditRouter;
