const express = require('express');

const configureMiddleware = require('./configureMiddleware.js');

const apiRouter = require('./api.js');

const server = express();

configureMiddleware(server)

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send('Server is up');
})

module.exports = server;