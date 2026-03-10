CREATE DATABASE job_tracker;

USE job_tracker;

CREATE TABLE applications (
id INT AUTO_INCREMENT PRIMARY KEY,
company VARCHAR(100),
position VARCHAR(100),
status VARCHAR(50),
notes TEXT
);
