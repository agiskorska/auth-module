const { Router } = require('express');

const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/:username', userController.index);
userRouter.post('/register', userController.create);
userRouter.put('/reset/:username', userController.reset);

module.exports = userRouter;