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
      ]
});

//Create User model with schema
const User = model('User', UserSchema);

//Export User model
module.exports = User;