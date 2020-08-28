const server = require('./api/server.js');
require('dotenv').config()
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

// connect to the DB
mongoose.connect(process.env.DB_CONNECTION,  
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => {
    console.log("Connected to the Database.")
})

server.listen(port, () => {
    console.log(`\n** Server listening on port ${port} **\n`);
})