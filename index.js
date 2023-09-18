const express = require('express');
const app = express();
const PORT = 3000;

// Importa los routers
const listViewRouter = require('./routes/list-view-router');
const listEditRouter = require('./routes/list-edit-router');

// Usa los routers en el servidor
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
