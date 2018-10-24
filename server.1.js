require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
var app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");

const pgp = require("pg-promise")();
const db = pgp({
  host: "localhost",
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

app.get("/", function(req, res) {
  res.render("index");
});

// io.on('connection', function(socket){
//   console.log("a user connected");
//   socket.on('chat message', function(msg){
//     console.log(msg);
//     console.log('message: ' + msg);
//     io.emit('chat message', msg);
//   });
// });

io.on('connection', function(socket){
  console.log('user connected')

  socket.on('disconnect', function(){
    // console.log('user disconnected')
  })

  socket.on('chat', function(data){
    console.log('message: ' + data)
    io.emit('chat', data)
  })
})

app.listen(8000, function() {
  console.log("listening on port 8000");
});


// app.use(bodyParser.json());
// app.use("/static", express.static("static"));
// app.set("view engine", "hbs");

// const pgp = require("pg-promise")();
// const db = pgp({
//   host: "localhost",
//   port: 5432,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD
// });

// app.get("/", function(req, res) {
//   res.render("index");
// });

// app.listen(8080, function() {
//   console.log("Listening on port 8080");
// });
