CREATE DATABASE ToDoDB;

USE ToDoDB;

CREATE TABLE Task
(
	`Id` INT PRIMARY KEY AUTO_INCREMENT,
    `Group` VARCHAR(50),
    `Target` VARCHAR(200),
    `Description` VARCHAR(500),
    `Days` INT,
    `Status` BOOL
);

INSERT INTO Task VALUES
	(1, 'Setup', 'IDE, Node, NPM, etc', 'Know how to setup IDE, NodeJS,...', 1, 1),
    (2, 'NPM', 'Understand NPM', 'Understand NPM so that you can build node packages', 1, 1),
    (3, 'ES6', 'Arrow', 'Understand Arrow', 1, 1),
    (4, 'ES6', 'Classes', 'Understand Classes', 1, 1),
    (5, 'ES6', 'Destructuring', 'Understand Destructuring', 1, 1),
    (6, 'ES6', 'Let & Const', 'Understand Let & Const', 1, 1),
    (7, 'ES6', 'Default & Rest & Spread', 'Understand Default & Rest & Spread', 1, 1),
    (8, 'ES6', 'Modules', 'Understand Modules', 1, 1),
    (9, 'ES6', 'Promises', 'Understand Promises', 1, 1),
    (10, 'ES6', 'Array', 'Understand Array (Map, Filter, Some, Find, Reduce)', 1, 1)