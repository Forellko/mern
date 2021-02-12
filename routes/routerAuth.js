const { Router } = require('express');
const checkInputs = require('../middlewares/validator');
const routerAuth = Router();

routerAuth.post(
  '/register',
  checkInputs,
  require('../controllers/controllerAuthRegister')
);

routerAuth.post(
  '/login',
  checkInputs,
  require('../controllers/controllerAuthLogin')
);

module.exports = routerAuth;
