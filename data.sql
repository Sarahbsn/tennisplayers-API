CREATE DATABASE tennisPlayersAPI CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE tennisPlayersAPI;

CREATE TABLE tennis_players (
id int NOT NULL AUTO_INCREMENT,
firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
date_of_birth DATE NOT NULL,
nationality VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO tennis_players (firstname, lastname, date_of_birth, nationality)
VALUES ('Roger', 'Federer', '1981-08-08', 'Swiss'), ('Rafael', 'Nadal', '1986-06-03', 'Spanish'), ('Novac', 'Djokovic', '1987-05-22', 'Serbian'), ('Caroline', 'Garcia', '1993-10-16', 'French'), ('Fiona', 'Ferro', '1997-03-12', 'French');
