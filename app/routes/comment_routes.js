const express = require('express')
const router = express.Router()
// require post model
const Post = require('./../models/post')
// import custom_errors function
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404

// CREATE
// POST /comments/
router.post('/post/:id', (req, res, next) => {
  // get the comment data from the body of the request
  const commentData = req.body.comment
  // get the post id from the body
  const postId = req.params.id
  // find the post by its id
  Post.findById(postId)
    .then(handle404)
    .then((post) => {
      // add comment to post
      post.comments.push(commentData)
      // save post
      return post.save()
    })
  // send response back to client
    .then((post) => res.status(201).json({ post: post }))
    .catch(next)
})

// DESTROY
// DELETE /comments/:id
router.delete('/post/:id', (req, res, next) => {
  // get comment id
  const commentId = req.params.id
  Post.findOne({ 'comments._id': commentId })
    .then(handle404)
    // remove comment
    .then((post) => {
      post.comments.id(commentId).remove()
      return post.save()
    })
    // send response
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE comment - still under construction
// PATCH /comments/:id
router.patch('/update-comments/:postId/:commentId', (req, res, next) => {
  // get comment and post id for update
  const commentId = req.params.commentId
  const postId = req.params.postId
  const commentData = req.body.comment
  // find post to find comment to update
  Post.findOne(postId)
    .then(handle404)
    // return updated comment
    .then((post) => {
      return post.comments.id(commentId).updateOne(commentData)
    })
    // send response
    .then(() => res.sendStatus(204))
    .catch(next)
})
module.exports = router
