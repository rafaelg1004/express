const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
// Importa los routers
const listViewRouter = require('./routes/list-view-router');
const listEditRouter = require('./routes/list-edit-router');

// Usa los routers en el servidor
app.use('/', listViewRouter);
app.use('/', listEditRouter);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
