CREATE DATABASE quiz;

CREATE TABLE question (
id SERIAL PRIMARY KEY,
question TEXT NOT NULL
);

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

INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'Windows XP', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'Windows 2000', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'Windows 7', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'Windows 95', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'Microsoft', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'Sun Microsystems', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'Netscape Communications', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'Apple', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, 'Eight Years', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, 'Two Years', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, 'Four Years', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, 'Year', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, 'December 20, 1990', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, 'December 17, 1996', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, 'November 24, 1995', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, 'November 12, 1990', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'C#', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'PHP', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'JavaScript', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'Python', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, '?:', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, '??', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, 'if then', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, '?', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (7, 'Serbia', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (7, 'Romania', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (7, 'Russia', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (7, 'Rwanda', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (8, 'Click', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (8, 'Think', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (8, 'Pixel', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (8, 'Logic', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (9, 'Internet as a Service', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (9, 'Internet and a Server', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (9, 'Infrastructure as a Service', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (9, 'Infrastructure as a Server', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (10, 'static', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (10, 'center', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (10, 'relative', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (10, 'absolute', DEFAULT);
