const router = require('express').Router()

// import sub routes here


// use subroutes here



// route /api
router.get('/', (req, res) => {
    res.send('Welcome to the api.');
})

router.get('/posts', (req, res) => {
    res.send('Welcome to posts.');
})
module.exports = router