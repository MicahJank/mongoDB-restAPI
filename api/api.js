const router = require('express').Router()

// import sub routes here


// use subroutes here



// route /api
router.get('/', (req, res) => {
    res.send('Welcome to the api.');
})
module.exports = router