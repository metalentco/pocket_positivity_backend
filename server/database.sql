CREATE DATABASE pocket_positivity;

CREATE TABLE users(user_id SERIAL PRIMARY KEY, username VARCHAR(30), email VARCHAR(255) NOT NULL, password VARCHAR(60) NOT NULL);

CREATE TABLE mantras(mantra_id SERIAL PRIMARY KEY, mantra VARCHAR(255), user_id_fk INTEGER , FOREIGN KEY (user_id_fk) REFERENCES users (user_id));

CREATE TABLE scores(score_id SERIAL PRIMARY KEY, score INTEGER, date DATE NOT NULL DEFAULT CURRENT_DATE, user_id_fk INTEGER, FOREIGN KEY (user_id_fk) REFERENCES users (user_id));