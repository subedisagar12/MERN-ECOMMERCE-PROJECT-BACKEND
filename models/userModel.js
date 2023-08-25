const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_picture: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
