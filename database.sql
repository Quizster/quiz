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


/*INSERT INTO question(question) VALUES ('In the Bible who interpreted the dreams of Pharaoh?');
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
INSERT INTO question(question) VALUES ('Who was the Czar of Russia in 1917?'); */

CREATE TABLE answer(
id SERIAL PRIMARY KEY,
question_id INT,
is_correct BOOLEAN NOT NULL DEFAULT FALSE,
answer VARCHAR(100) NOT NULL,
FOREIGN KEY (question_id) REFERENCES question (id)
);

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

/*INSERT INTO answer (question_id, answer, is_correct) VALUES (1, 'Joseph', TRUE);
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
INSERT INTO answer (question_id, answer, is_correct) VALUES (9, 'Teheran', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (9, 'Baghdad', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (9, 'Kabul', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (9, 'Tashkent', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (10, 'Albino Luciani', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (10, 'Angelo Roncalli', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (10, 'Aldo Moro', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (10, 'Sandro Pertini', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (11, 'Delhi', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (11, 'Amarkot', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (11, 'Agra', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (11, 'Sikandra', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (12, 'Napoleon Bonaparte', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (12, 'Horatio Nelson', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (12, 'Francis Drake', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (12, 'Charles Martel', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (13, 'Augustinian', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (13, 'Dominican', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (13, 'Capuchin', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (13, 'Franciscan', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (14, 'Monarchy', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (14, 'Aristocracy', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (14, 'Theocracy', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (14, 'Anarchy', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (15, 'Lee Harvey Oswald', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (15, 'John Hinckley', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (15, 'John Wilkes Booth', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (15, 'Michael Schiavo', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (16, 'India', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (16, 'Pakistan', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (16, 'Germany', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (16, 'Australia', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (17, 'Star News', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (17, 'CNN', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (17, 'BBC', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (17, 'Fox News', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (18, 'Nitrogen', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (18, 'Oxygen', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (18, 'Helium', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (18, 'Mercury', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (19, 'Kerala', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (19, 'Andhra Pradesh', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (19, 'Karnataka', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (19, 'Tamil Nadu', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (20, 'Nicholas II', TRUE);
INSERT INTO answer (question_id, answer, is_correct) VALUES (20, 'Alexander II', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (20, 'Ivan IV', DEFAULT);
INSERT INTO answer (question_id, answer, is_correct) VALUES (20, 'Peter II', DEFAULT);
*/

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