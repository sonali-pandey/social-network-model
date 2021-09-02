const {Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: "username required!",
        trim: true
      },
      email: {
        type: String,
        unique: true,
        required: "email address is required!",
        match: [/.+\@.+\..+/, "Please enter a valid email address!"]
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
        getter: true
      },
      id: false
    }
);

//Virtual for friend count
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

//Create User model with schema
const User = model('User', UserSchema);

//Export User model
module.exports = User;