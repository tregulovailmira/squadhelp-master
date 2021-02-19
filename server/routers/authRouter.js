const { Router } = require('express');
const hashPass = require('../middlewares/hashPassMiddle');
const validators = require('../middlewares/validators');
const userController = require('../controllers/userController');


const authRouter = Router();

authRouter.post('/sighin', validators.validateLogin, userController.login,);

authRouter.post('/sighup', validators.validateRegistrationData, hashPass, userController.registration);

module.exports = authRouter;
