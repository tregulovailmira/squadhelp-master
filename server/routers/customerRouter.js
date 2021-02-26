const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');

const customerRouter = Router();

customerRouter.get('/contests', checkToken.checkToken, basicMiddlewares.convertingQueryParams, contestController.getCustomersContests);

module.exports = customerRouter;
