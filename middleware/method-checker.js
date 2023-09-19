function checkMethod(req, res, next) {
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
    if (!validMethods.includes(req.method)) {
      return res.status(400).send('Método HTTP no válido');
    }
    next();
  }
  
  module.exports = checkMethod;
  