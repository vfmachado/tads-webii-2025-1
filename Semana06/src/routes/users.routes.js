
const { Router } = require('express');
const usersController = require('../controllers/users.controller');
const isAuth = require('../middlewares/isAuth');
const authController = require('../controllers/auth.controller');

const usersRouter = Router();

usersRouter.get('/users', isAuth, usersController.getAll);
usersRouter.post('/users', usersController.create);
usersRouter.post('/auth',  authController.login);
usersRouter.get('/logoff',  authController.logoff);



module.exports = usersRouter;