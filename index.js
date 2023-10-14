const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path:'./.env'});
app.use(express.json());
//Importar middlewares
const methodChecker = require('./middleware/method-checker');
const handleViewParams=require("./middleware/view-param-handler")
const handleEditErrors = require('./middleware/edit-error-handler');
const JWTValidation =require("./middleware/jwvalidation");
app.use(methodChecker);


// Importa los routers

const listViewRouter = require('./routes/list-view-router');
const listEditRouter = require('./routes/list-edit-router');
const loginRouter = require('./routes/login')
// Usa el middleware para verificar el método HTTP

// Usa el middleware de view-error-handler
app.use(JWTValidation);
app.use(handleViewParams);

// Usa los routers en el servidor
app.use('/',listViewRouter);
app.use("/",loginRouter);
app.use('/', handleEditErrors,listEditRouter);


app.listen(process.env.PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${process.env.PORT}`);
});
