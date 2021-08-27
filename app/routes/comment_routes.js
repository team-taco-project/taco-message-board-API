const express = require('express')
const router = express.Router()
// require post model
const Post = require('./../models/post')
// import custom_errors function
const customErrors = require('../../lib/custom_errors')

const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })
const requireOwnership = customErrors.requireOwnership

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404

// CREATE
// POST /comments/
router.post('/post/:id', requireToken, (req, res, next) => {
  req.body.comment.owner = req.user.id
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
router.delete('/post/:postId/:commentId', requireToken, (req, res, next) => {
  const postId = req.params.postId
  const commentId = req.params.commentId
  Post.findById(postId)
    .then(handle404)
    .then((post) => {
      const singleComment = post.comments.id(commentId)
      requireOwnership(req, singleComment)
      singleComment.remove()
      return post.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE
// PATCH /comments/:id
router.patch('/comments/:postId/:commentId/', (req, res, next) => {
  // get comment and post id for update
  const postId = req.params.postId
  const commentId = req.params.commentId
  const commentData = req.body.comment
  // find post to find comment to update
  Post.findById(postId)
    .then(handle404)
  // return updated comment
    .then((post) => {
      const newComment = post.comments.id(commentId)
      newComment.set(commentData)
      return post.save()
    })
  // send response
    .then(() => res.sendStatus(204))
    .catch(next)
})
module.exports = router
