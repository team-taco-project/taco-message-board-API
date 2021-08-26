const express = require('express')
const router = express.Router()
// require post model
const Post = require('./../models/post')
const customErrors = require('../../lib/custom_errors')
// const passport = require('passport')
// const requireToken = passport.authenticate('bearer', { session: false })

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
router.delete('/post/:postId/:commentId', (req, res, next) => {
  const postId = req.params.postId
  const commentId = req.params.commentId
  console.log(commentId)
  Post.findById(postId)
    .then(handle404)
    .then((post) => {
      post.comments.id(commentId).remove()
      return post.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE
// PATCH /comments/:id
router.patch('/post/:commentId', (req, res, next) => {
  const commentId = req.params.commentId
  const commentData = req.body.comment
  Post.findById(commentId)
    .then(handle404)
    .then((comment) => {
      const newComment = comment.id(commentId)
      newComment.set(commentData)
      return comment.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// // SHOW
// // GET /posts/5a7db6c74d55bc51bdf39793
// router.get('/post/:postId/:commentId', requireToken, (req, res, next) => {
//   // req.params.id will be set based on the `:id` in the route
//   const postId = req.params.postId
//   const commentId = req.params.commentId
//   Post.findById(postId)
//     .then(handle404)
//   // if `findById` is succesful, respond with 200 and "post" JSON
//   // find comment
//   // return comment
//     .then((post) => {
//       const comment = post.comments.id(commentId)
//       res.status(200).json({ comments: comment.toObject() })
//     })
//   // if an error occurs, pass it to the handler
//     .catch(next)
// })
module.exports = router
