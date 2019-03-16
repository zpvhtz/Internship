CREATE DATABASE ProductDB;

USE ProductDB;

CREATE TABLE Product
(
	`Id` INT PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(50),
    `Price` DOUBLE,
    `Description` VARCHAR(500),
    `Quantity` INT,
    `Status` VARCHAR(20)
);

CREATE TABLE User
(
	`Id` INT PRIMARY KEY AUTO_INCREMENT,
    `Username` VARCHAR(30),
    `Password` VARCHAR(50),
    `Name` VARCHAR(50)
);

CREATE TABLE Cart
(
	`IdUser` INT NOT NULL,
    `IdProduct` INT NOT NULL
);

ALTER TABLE Cart
	ADD CONSTRAINT FK_Cart_User FOREIGN KEY (`IdUser`) REFERENCES User(`Id`),
    ADD CONSTRAINT FK_Cart_Product FOREIGN KEY (`IdProduct`) REFERENCES Product(`Id`),
    ADD CONSTRAINT PK_Cart_User_Product PRIMARY KEY (`IdUser`, `IdProduct`);

INSERT INTO Product VALUES
	(1, 'Samsung Galaxy Note 9', 18990000, '', 23, 'Available'),
    (2, 'Samsung Galaxy S10', 20990000, '', 12, 'Available'),
    (3, 'Samsung Galaxy A8 Star', 8290000, '', 17, 'Available'),
    (4, 'Samsung Galaxy A7', 6990000, '', 35, 'Available'),
    (5, 'Xiaomi Mi 8', 12990000, '', 0, 'Out of stock'),
    (6, 'Xiaomi Mi 8 Lite', 7490000, '', 28, 'Available'),
    (7, 'Xiaomi Mi A2', 5690000, '', 39, 'Available'),
    (8, 'Xiaomi Redmi Note 6 Pro', 4990000, '', 11, 'Available');

INSERT INTO User VALUES
	(1, 'user1', md5('user1'), 'Hieu Trung'),
    (2, 'user2', md5('user2'), 'Nguyen Nho');