/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables. */

DROP DATABASE IF EXISTS invitation_list;	

CREATE DATABASE invitation_list;

USE invitation_list;

CREATE TABLE guests(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	-- hasConfirmed boolean not null,
	PRIMARY KEY(id)
);


INSERT INTO guests(id, name) VALUES (1, 'first one');
INSERT INTO guests(id, name) VALUES (2, 'second one');

