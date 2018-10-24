require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

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

// TODO: create endpoint for submiting player answer
app.post("/api/player/answer", (req, res) => {
  db.one(`INSERT INTO player (id, name, answer) VALUES ('placed') RETURNING id`)
    .then(result => {})
    .then(data => {})
    .catch(error => res.json({ error: error.message }));
});

app.listen(8080, function() {
  console.log("Listening on port 8080");
});
