'use strict'

// requiring the mongoose library and comment
const mongoose = require('mongoose')
const commentSchema = require('./comment')
// eslint-disable-next-line no-unused-vars
const User = require('./user')
// Create schema constructor
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  // create a sub-document array called 'comments'
  // defined by commentSchema
  // title: String, body: String
  // want to add extra schema type options
  // comments: [{type: commentSchema, required: true}]
  comments: [commentSchema],
  // using references
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

const post = mongoose.model('post', postSchema)

module.exports = post
