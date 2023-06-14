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
    notes VARCHAR(1000)
);
CREATE TABLE IF NOT EXISTS laptops(
    laptop_number INT PRIMARY KEY,
    serial_number VARCHAR(150),
    model VARCHAR(255),
    status VARCHAR(150),
    notes VARCHAR(1000)

);
CREATE TABLE IF NOT EXISTS announcements(
    announcement_id INT AUTO_INCREMENT PRIMARY KEY,
    topic VARCHAR(150) NOT NULL,
    situation VARCHAR(1000) NOT NULL,
    end_result VARCHAR(1000),
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    urgency VARCHAR(50)

);
CREATE TABLE IF NOT EXISTS headphones(
    headphone_number INT PRIMARY KEY,
    serial_number VARCHAR(50) NOT NULL,
    two_cords BOOLEAN NOT NULL DEFAULT TRUE,
    notes VARCHAR(1000)
);


