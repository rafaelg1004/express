function handleViewParams(req, res, next) {
    // Verifica si los parámetros son correctos aquí
    // Por ejemplo, si esperas un parámetro llamado 'id', puedes hacer la validación así:
     id = req.params.id;
     console.log(id);
    if (!id) {
      return res.status(400).send('El parámetro id es incorrecto');
   }
    
    // Si la validación es exitosa, llama a next() para pasar al siguiente middleware o ruta
    next();
  }
  
  module.exports = handleViewParams;
  