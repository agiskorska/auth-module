const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const userRouter = require('./routers/userRouter')
server.use('/user', userRouter)

module.exports = server;