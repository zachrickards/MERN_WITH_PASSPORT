const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define messageSchema
const messageSchema = new Schema({
  chatId: { type: String },
  sender: { type: String},
  receiver: { type: String },
  body: { type: String },
  timestamp: { type: Date, default: Date.now }
});

// Define schema methods
messageSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
