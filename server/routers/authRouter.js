const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const hashPass = require('../middlewares/hashPassMiddle');
const validators = require('../middlewares/validators');
const userController = require('../controllers/userController');


const authRouter = Router();

authRouter.post('/sighin', validators.validateLogin, userController.login,);

authRouter.post('/sighup', validators.validateRegistrationData, hashPass, userController.registration);

authRouter.get('/authUser',  checkToken.checkAuth);

module.exports = authRouter;
