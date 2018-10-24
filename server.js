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

// get quiz questions
app.get("/api/questions", function(req, res) {
  db.any(
    "SELECT question.id AS questionId, answer.id AS answerId, question.question, answer.answer,answer.is_correct FROM answer, question WHERE question.id = answer.question_id"
  ).then(output => {
    let objectWitQuestionsToBeReturned = {};
    let fullObjectOfanswers = {};

    output.forEach((item, index) => {
      fullObjectOfanswers[item.answerid] = item.answer;
      objectWitQuestionsToBeReturned[item.questionid] = {
        id: item.questionid,
        question: item.question,
        answers: {
          [index - 2]: fullObjectOfanswers[index - 2],
          [index - 1]: fullObjectOfanswers[index - 1],
          [index]: fullObjectOfanswers[index],
          [index + 1]: fullObjectOfanswers[index + 1]
        }
      };
    });
    output.forEach(item => {
      if (item.is_correct === true) {
        objectWitQuestionsToBeReturned[item.questionid] = Object.assign(
          {},
          objectWitQuestionsToBeReturned[item.questionid],
          { correctAnswer: item.answerid }
        );
      }
    });

    res.json(objectWitQuestionsToBeReturned);
  });
});

// Submit player name and get player id
app.post("/api/player/user", function(req, res) {
  const playerName  = req.body;
  db.one(
    `INSERT INTO player (name) VALUES ($1) RETURNING id, name`,
    [playerName]
  )
    .then(data => {
      res.json(data.id);
    })
    .catch(error => {
      res.json({
        error: error.message
      });
    });
});

app.listen(8080, function() {
  console.log("Listening on port 8080");
});
