const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define chatSchema
const matchSchema = new Schema({
  users: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
      },
      match: {
        type: Boolean,
        required: true,
      },
    },
  ],
  socketRoomName: {
    type: String,
    required: true,
  },
  messages: [
    {
      messageId: {
        type: Schema.Types.ObjectId,
        auto: true,
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
      },
      msg: {
        type: String,
        trim: true,
        minLength: 1,
      },
      dateCreated: {
        type: Date,
        default: Date.now(),
      },
      dateUpdated: {
        type: Date,
      },
    },
  ],
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
