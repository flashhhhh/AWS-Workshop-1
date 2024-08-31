CREATE DATABASE `de_db`;

USE `de_db`;

CREATE TABLE `customers` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL UNIQUE,
  `phone_number` varchar(15) NOT NULL,
  `balance` double NOT NULL DEFAULT 0
);

CREATE TABLE `transactions` (CREATE TABLE `customers` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL UNIQUE,
  `phone_number` varchar(15) NOT NULL,
  `balance` double NOT NULL DEFAULT 0
);

CREATE TABLE `transactions` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `sender_id` integer NOT NULL,
  `receiver_id` integer NOT NULL,
  `amount` double NOT NULL,
  `trans_time` timestamp DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `transactions` ADD FOREIGN KEY (`sender_id`) REFERENCES `customers` (`id`);

ALTER TABLE `transactions` ADD FOREIGN KEY (`receiver_id`) REFERENCES `customers` (`id`);

  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `sender_id` integer NOT NULL,
  `receiver_id` integer NOT NULL,
  `amount` double NOT NULL,
  `trans_time` timestamp DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `transactions` ADD FOREIGN KEY (`sender_id`) REFERENCES `customers` (`id`);

ALTER TABLE `transactions` ADD FOREIGN KEY (`receiver_id`) REFERENCES `customers` (`id`);
