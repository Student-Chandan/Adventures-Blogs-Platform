const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const User = new mongoose.model("Users", userSchema);
module.exports = User;
