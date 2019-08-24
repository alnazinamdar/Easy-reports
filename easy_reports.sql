CREATE DATABASE login;
USE login;
CREATE TABLE user(
    user_id INT NOT NULL AUTOINCREMENT,
    name VARCHAR(32) NOT NULL,
    last_name VARCHAR(64) NOT NULL,
    birth DATE NOT NULL,
    
    username VARCHAR(32),
    password VARCHAR(32),  
    email VARCHAR(128),

    PRIMARY KEY(user_id)
);
