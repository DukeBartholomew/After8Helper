CREATE DATABASE IF NOT EXISTS DB;
USE DB;
CREATE TABLE IF NOT EXISTS users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    _username VARCHAR(255) NOT NULL,
    _password VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS items(
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(150) NOT NULL,
    quantity VARCHAR(150) NOT NULL,
    notes VARCHAR(500)
);
CREATE TABLE IF NOT EXISTS laptops(
    laptop_number INT PRIMARY KEY,
    serial_number VARCHAR(150),
    model VARCHAR(255),
    status VARCHAR(150),
    notes VARCHAR(500)
);
CREATE TABLE IF NOT EXISTS announcements(
    announcement_id INT AUTO_INCREMENT PRIMARY KEY,
    topic VARCHAR(150) NOT NULL,
    situation VARCHAR(500) NOT NULL,
    end_result VARCHAR(500),
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    urgency VARCHAR(50)
);
INSERT INTO users (_username, _password) VALUE("Duke B", "Password");
INSERT INTO users (_username, _password) VALUE("test", "test123");