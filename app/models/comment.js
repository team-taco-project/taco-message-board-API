'use strict'

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const User = require('./user')
// const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
		},
    image: {
      type: String
    },
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)
// do not need to create model for a sub-document
module.exports = commentSchema
