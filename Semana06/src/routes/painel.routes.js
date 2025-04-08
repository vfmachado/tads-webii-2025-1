
const { Router } = require('express');
const isAuth = require('../middlewares/isAuth');
const isAdmin = require('../middlewares/isAdmin');

const painelController = require('../controllers/painel.controller');

const painelRouter = Router();

painelRouter.get('/painel-admin', isAdmin, painelController.get);



module.exports = painelRouter;