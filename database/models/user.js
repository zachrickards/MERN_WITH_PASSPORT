const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

//each user has a match -> this is an array of users that they swiped yes
// if the user swiped yes and the other user swiped yes, this is a confirmed match
// Define userSchema
const userSchema = new Schema({
  username: { type: String, unique: true},
  // ASK CALEB: Validate email syntax
  email: { type: String, unique: true},
  password: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  location: { type: String },
  gender: { type: String },
  pronouns: { type: Array },
  sexuality: { type: String },
  status: { type: String },
  agePref: { 
    topOfRange: Number,
    bottomOfRange: Number
  },
  genderPref: { type: String},
  bio: { type: String },
  interests: { type: Array },
  yesSwipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
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
  }
});

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define hooks for pre-saving
userSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("NO PASSWORD PROVIDED");
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);
// const Match = mongoose.model('Match', matchSchema);

module.exports = User;
