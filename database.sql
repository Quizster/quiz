CREATE DATABASE quiz;

CREATE TABLE question (
id SERIAL PRIMARY KEY,
question TEXT NOT NULL
);

INSERT INTO question(question) VALUES ('Whistler was the codename of this Microsoft Operating System?');
INSERT INTO question(question) VALUES ('Which company first implemented the JavaScript language?');
INSERT INTO question(question) VALUES ('Moores law originally stated that the number of transistors on a microprocessor chip would double every...?');
INSERT INTO question(question) VALUES ('On which day did the World Wide Web go online?');
INSERT INTO question(question) VALUES ('Which coding language was the #1 programming language in terms of usage on GitHub in 2015?');
INSERT INTO question(question) VALUES ('In programming, the ternary operator is mostly defined with what symbol(s)?');
INSERT INTO question(question) VALUES ('.rs is the top-level domain for what country?');
INSERT INTO question(question) VALUES ('What five letter word is the motto of the IBM Computer company?');
INSERT INTO question(question) VALUES ('In the server hosting industry IaaS stands for...?');
INSERT INTO question(question) VALUES ('In CSS, which of these values CANNOT be used with the position property?');

CREATE TABLE answer(
id SERIAL PRIMARY KEY,
question_id INT,
is_correct BOOLEAN NOT NULL DEFAULT FALSE,
answer VARCHAR(100) NOT NULL,
FOREIGN KEY (question_id) REFERENCES question (id)
);


CREATE TABLE quiz(
id SERIAL PRIMARY KEY,
FOREIGN KEY (question_id) REFERENCES question (id)
);

CREATE TABLE player (
id SERIAL PRIMARY KEY,
player INT,
name TEXT
);

CREATE TABLE results(
id SERIAL, 
quiz_id INT,
player_id INT,
question_id INT,
correct BOOLEAN,
PRIMARY KEY (id),
FOREIGN KEY (quiz_id) REFERENCES quiz (id),
FOREIGN KEY (player_id) REFERENCES player (id),
FOREIGN KEY (question_id) REFERENCES question (id)
);