const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define chatSchema
const chatSchema = new Schema({
  users: { type: Array },
  timestamp: { type: Date, default: Date.now }
});

// Define schema methods
chatSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
