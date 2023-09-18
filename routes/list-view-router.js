const express = require('express');
const listViewRouter = express.Router();

const tasks = [
    {
        "id": "123456",
        "isCompleted": false,
        "description": "Walk the dog"
      },
      {
        "id": "789012",
        "isCompleted": true,
        "description": "Buy groceries"
      },
      {
        "id": "345678",
        "isCompleted": false,
        "description": "Clean the house"
      }
];

// Ruta para listar tareas completas
listViewRouter.get('/completed', (req, res) => {
  const completedTasks = tasks.filter(task => task.isCompleted);
  res.json(completedTasks);
});

// Ruta para listar tareas incompletas
listViewRouter.get('/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = listViewRouter;
