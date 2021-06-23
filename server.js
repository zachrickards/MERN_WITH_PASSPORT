const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");

const mongooseConnection = require("./database");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sessions
app.use(
  session({
    secret: "RANDOM STRING",
    store: new MongoStore({
      mongooseConnection,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000", //replace with deployed link
    methods: ["GET", "POST"],
  },
});
const STATIC_CHANNELS = [
  {
    name: "Global chat",
    participants: 0,
    id: 1,
    sockets: [],
  },
  {
    name: "Funny",
    participants: 0,
    id: 2,
    sockets: [],
  },
];

// io.on("connection", (socket) => {
//   // socket object may be used to send specific messages to the new connected client
//   console.log("new client connected");
//   socket.emit("connection", null);
//   socket.on("channel-join", (id) => {
//     console.log("channel join", id);
//     STATIC_CHANNELS.forEach((c) => {
//       if (c.id === id) {
//         if (c.sockets.indexOf(socket.id) == -1) {
//           c.sockets.push(socket.id);
//           c.participants++;
//           io.emit("channel", c);
//         }
//       } else {
//         let index = c.sockets.indexOf(socket.id);
//         if (index != -1) {
//           c.sockets.splice(index, 1);
//           c.participants--;
//           io.emit("channel", c);
//         }
//       }
//     });

//     return id;
//   });
//   socket.on("send-message", (message) => {
//     io.emit("message", message);
//   });

  // Start the API server
  httpServer.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

  app.get("/getChannels", (req, res) => {
    res.json({
      channels: STATIC_CHANNELS,
    });
  });
// });
