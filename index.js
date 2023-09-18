const express = require("express");
const app = express();
const PORT = 3000;

const tasks = [
  {
    id: "123456",
    isCompleted: false,
    description: "Walk the dog",
  },
  {
    id: "789012",
    isCompleted: true,
    description: "Buy groceries",
  },
  {
    id: "345678",
    isCompleted: false,
    description: "Clean the house",
  }
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
