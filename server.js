const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const http = require('http');
const mongooseConnection = require("./database");
const routes = require("./routes");

const app = express();
const server = http.createServer(app)
const { Server } = require('socket.io');
const io = new Server(server);
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

// app.use((req, res, next) => {
//   res.setHeader(
//     'Access-Control-Allow-Origin', '*');
//   next();
// })

io.on('connection', (socket) => {
  console.log("a user connected");
  socket.emit("connection", null);
  require("./sockets/chat/joinManyRooms")(io, socket);
  require('./sockets/chat/msg')(io, socket);
  require('./sockets/dissconected')(io, socket);
});


  // Start the API server
server.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

