const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define chatSchema
const chatSchema = new Schema({
  users: { type: Array, unique: true, required: true },
  messages: { type: Array, required: true},
  timestamp: {type: Date, required: true}
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
// const Match = mongoose.model('Match', matchSchema);

module.exports = Chat;
