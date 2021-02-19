const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const contestController = require('../controllers/contestController');

const customerRouter = Router();

customerRouter.post('/contests', checkToken.checkToken, contestController.getCustomersContests);

module.exports = customerRouter;
