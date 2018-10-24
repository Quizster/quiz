CREATE DATABASE quiz;
CREATE TABLE question (
id SERIAL PRIMARY KEY,
question TEXT NOT NULL
)
INSERT INTO question(question) VALUES ('In the Bible who interpreted the dreams of Pharaoh?');
INSERT INTO question(question) VALUES ('The flag of which country has the Star of David?');
INSERT INTO question(question) VALUES ('In which year was Magna Carta signed?');
INSERT INTO question(question) VALUES ('When was Carthage destroyed?');
INSERT INTO question(question) VALUES ('Which country is ruled by a single dynasty for more than two thousand years?');
INSERT INTO question(question) VALUES ('Who is the author of Ben Hur?');
INSERT INTO question(question) VALUES ('Which game is played with five players on either side?');
INSERT INTO question(question) VALUES ('Which is the national flower of Ireland?');
INSERT INTO question(question) VALUES ('Which is the capital of Afghanistan?');
INSERT INTO question(question) VALUES ('What is the baptismal name of Pope John XXIII?');
INSERT INTO question(question) VALUES ('Where is Emperor Akbar’s tomb?');
INSERT INTO question(question) VALUES ('Who died in the Battle of Trafalgar?');
INSERT INTO question(question) VALUES ('To which Order did Martin Luther belong?');
INSERT INTO question(question) VALUES ('What is the type of Government in Swaziland?');
INSERT INTO question(question) VALUES ('Who killed US President Abraham Lincoln?');
INSERT INTO question(question) VALUES ('Who won the Hockey World Cup in 1975?');
INSERT INTO question(question) VALUES ('Which TV news channel began telecast in 1980?');
INSERT INTO question(question) VALUES ('Which of the following is not a gas?');
INSERT INTO question(question) VALUES ('Which state was known as Mysore?');
INSERT INTO question(question) VALUES ('Who was the Czar of Russia in 1917?');
CREATE TABLE answer(
id SERIAL PRIMARY KEY,
question_id INT,
is_correct BOOLEAN NOT NULL DEFAULT FALSE,
answer VARCHAR(100) NOT NULL,
FOREIGN KEY (question_id) REFERENCES question (id)
)
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'Joseph', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'Daniel', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'David', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'Samuel', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'USA', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'Iraq', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'Israel', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (2, 'Nepal', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, '1603', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, '1066', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, '1707', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (3, '1215', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, '149 B.C.', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, '323 B.C.', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, '44 A.D.', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (4, '70 A.D.', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'England', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'Persia', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'Japan', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (5, 'Egypt', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, 'Lew Wallace', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, 'William Shakespeare', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, 'Bernard Shaw', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (6, 'Victor Hugo', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (7, 'Basketball', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (7, 'Volleyball', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (7, 'Hockey', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (7, 'Football', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (8, 'Daffodil', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (8, 'Shamrock', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (8, 'Marigold', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (8, 'Jasmine', DEFAULT);

CREATE TABLE player (
    id SERIAL PRIMARY KEY,
    player INT,
    name TEXT,
    question_id INT,
    is_correct BOOLEAN,
    FOREIGN KEY (question_id) REFERENCES question (id)
);