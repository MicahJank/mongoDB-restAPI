const router = require('express').Router();
const Post = require('../models/Post.js');

// api/posts
// sends back all the posts that have been saved to the Post document
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find(); // <-- find is a method that comes with mongoose, its like helper methods when using knex with sql to create models
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
})


// gets a specific posts
router.get('/:postId', (req, res) => {
    const { postId } = req.params
    Post.findById(postId)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
})

// this saves the post from the body of the request to the Post document
// what comes in from the req.body is an object so as long as the fields match the Post schema i can simply pass the body object to the new Post
router.post('/', (req, res) => {
    const post = new Post(req.body)

    post.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: "There was an issue posting the data", err});
    })
})


// deletes the post from the database document
router.delete('/:postId', (req, res) => {
    const { postId } = req.params;
    Post.remove({ _id: postId })
    .then(() => {
        res.json({ success: 'Deleted post successfully.' })
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
})

// update a post
// remember patch lets the front end send partial data to be updated
// put requires a whole object to replace
router.patch('/:postId', (req, res) => {
    const { postId } = req.params;
    Post.updateOne({ _id: postId }, req.body )
    .then(data => {
        res.json({ success: 'Updated post successfully'})
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
})



module.exports = router;