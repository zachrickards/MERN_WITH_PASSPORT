const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define userSchema
const ProfileSchema = new monogoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  location: { type: String },
  gender: { type: String },
  pronouns: { type: Array },
  sexuality: { type: String },
  status: { type: String },
  bio: { type: String },
  interests: { type: Array },
  yesSwipes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  noSwipes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  matches: [{ type: Schema.Types.ObjectId, ref: "User" }],
  profileImg: {
    public_id: {
      type: String,
    },
    filename: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
