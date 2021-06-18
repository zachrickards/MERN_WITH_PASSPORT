const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, required: true },
  password: { type: String, required: true, unique: true, required: true },
  firstName: { type: String, required: true, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  gender: { type: String, required: true },
  pronouns: { type: Array, required: true },
  sexuality: { type: String, required: true },
  status: { type: String, required: true },
  bio: { type: String, required: true},
  interests: { type: Array, required: true},
  yesSwipes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  noSwipes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  matches: [{ type: Schema.Types.ObjectId, ref: "User" }],
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
