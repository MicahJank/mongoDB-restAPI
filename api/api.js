const router = require('express').Router()

// import sub routes here
const postsRouter = require('../routes/postsRouter.js');

// use subroutes here
router.use('/posts', postsRouter);


// route /api
router.get('/', (req, res) => {
    res.send('Welcome to the api.');
})

module.exports = router