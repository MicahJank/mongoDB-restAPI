const router = require('express').Router();



// api/posts
router.get('/', (req, res) => {
    res.send('Welcome to posts.');
})


module.exports = router;