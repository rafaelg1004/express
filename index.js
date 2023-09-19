const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
//Importar middlewares
const methodChecker = require('./middleware/method-checker');
const handleViewErrors = require('./middleware/view-param-handler');
const handleEditErrors = require('./middleware/edit-error-handler');
// Importa los routers
const listViewRouter = require('./routes/list-view-router');
const listEditRouter = require('./routes/list-edit-router');
// Usa el middleware para verificar el método HTTP
app.use(methodChecker);
// Usa el middleware de view-error-handler



// Usa los routers en el servidor
app.use('/',listViewRouter);
app.use("/",handleViewErrors);
app.use('/', handleEditErrors,listEditRouter);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
