CREATE DATABASE IF NOT EXISTS shopping;

USE shopping;

DROP TABLE IF NOT EXISTS payment;
DROP TABLE IF NOT EXISTS addresses;
DROP TABLE IF NOT EXISTS customers;
DROP TABLE IF EXISTS orders;

CREATE TABLE IF NOT EXISTS orders
  (
   order_id INT NOT NULL AUTO_INCREMENT,
   PRIMARY KEY (order_id)
  );

CREATE TABLE IF NOT EXISTS customers
  (
   customer_id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(500),
   email VARCHAR(500),
   password VARCHAR(500),
   order_id INT,
   PRIMARY KEY (customer_id),
   FOREIGN KEY (order_id) REFERENCES orders(order_id)
  );

CREATE TABLE IF NOT EXISTS addresses
  (
   address_id INT NOT NULL AUTO_INCREMENT,
   line_1 VARCHAR(500),
   line_2 VARCHAR(500),
   city VARCHAR(500),
   state VARCHAR(500),
   zip_code VARCHAR(500),
   phone_number VARCHAR(500),
   order_id INT,
   PRIMARY KEY (address_id),
   FOREIGN KEY (order_id) REFERENCES orders(order_id)
  );

CREATE TABLE IF NOT EXISTS payment
  (
   payment_id INT NOT NULL AUTO_INCREMENT,
   credit_card_number VARCHAR(500),
   expiry_date VARCHAR(500),
   cvv VARCHAR(500),
   billing_zip VARCHAR(500),
   order_id INT,
   PRIMARY KEY (payment_id),
   FOREIGN KEY (order_id) REFERENCES orders(order_id)
  );