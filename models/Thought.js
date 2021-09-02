const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: 'Reaction cannot be empty!',
      maxLength: 280
    },
    username: {
      type: String,
      required: 'Username is required!'
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

const ThoughtSchema = new Schema(
    {
      thoughtBody: {
        type: String,
        required: 'Thought cannot be empty!',
        minLength: 1,
        maxLength: 280
      },
      username: {
        type: String,
        required: "Username is required!"
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    // using ReactionSchema to validate data for a reaction
    reaction: [ReactionSchema]
},
    {
      toJSON: {
        virtuals: true,
        getters: true
      }
    }
);

//Virtual to count reactions
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reaction.length;
});

//create thought schema
const Thought = model('Thought', ThoughtSchema);

//export Thought model
module.exports = Thought;