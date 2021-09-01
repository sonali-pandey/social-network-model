const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      email: {
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/
      }
});

//Create User model with schema
const User = model('User', UserSchema);

//Export User model
module.exports = User;