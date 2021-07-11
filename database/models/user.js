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
  age: { type: Number, default: 0},
  location: { type: String, default: "Location"  },
  gender: { type: String, default: "Gender" },
  pronouns: { type: String, default: "Pronouns" },
  sexuality: { type: String, default: "Orientation" },
  status: { type: String, default: "Relationship type" },
  agePref: { 
    topOfRange: Number,
    bottomOfRange: Number
  },
  genderPref: { type: String, default: "Preferred gender(s)" },
  bio: { type: String, default: "Tell us about yourself!"  },
  interests: { type: String, default: "What are you interested in?"  },
  yes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  profileImg: {
    public_id: {
      type: String,
      default: "mcuhzfepk8us9juddlui"
    },
    filename: {
      type: String,
      default: "default_Profile_Pic"
    },
    url: {
      type: String,
      default: "https://res.cloudinary.com/dyvqfdd5w/image/upload/v1625953327/hmbei8nxaqm5vzfzl0el.png"
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
