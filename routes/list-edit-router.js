const express = require('express');
const listEditRouter = express.Router();

// Ruta para crear una nueva tarea
listEditRouter.post('/create', (req, res) => {
    const newTask = req.body; // Se espera que la solicitud contenga un objeto de tarea
    newTask.id = Date.now().toString(); // Asigna un ID único (en este caso, la marca de tiempo)
    tasks.push(newTask);
    res.json(newTask);
});

// Ruta para eliminar una tarea
listEditRouter.delete('/delete/:id', (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter(task => task.id !== taskId);
  res.json({ message: "Tarea eliminada exitosamente" });
});

// Ruta para actualizar una tarea
listEditRouter.put('/update/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body; // Se espera que la solicitud contenga un objeto de tarea actualizado
  
    tasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
  
    res.json({ message: "Tarea actualizada exitosamente" });
});

module.exports = listEditRouter;
