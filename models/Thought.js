const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
      thoughtBody: {
        type: String,
        required: 'Thought cannot be empty!',
        minLength: 1,
        maxLength: 250
      },
      username: {
        type: String,
        required: "Username is required!"
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
    {
      toJSON: {
        virtuals: true,
        getters: true
      }
    }
);

//create thought schema
const Thought = model('Thought', ThoughtSchema);

//export Thought model
module.exports = Thought;