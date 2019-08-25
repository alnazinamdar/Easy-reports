CREATE TABLE user(
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    last_name VARCHAR(64) NOT NULL,
    birth DATE NOT NULL,
    
    username VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL,  
    email VARCHAR(128) NOT NULL,

    PRIMARY KEY(user_id)
);

CREATE TABLE admin(
    admin_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    last_name VARCHAR(64) NOT NULL,
    birth DATE NOT NULL,
    
    username VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL,  
    email VARCHAR(128) NOT NULL,

    PRIMARY KEY(admin_id)
);

INSERT INTO admin(name, last_name, birth, username, password, email) VALUES('gabriel', 'rodrigues', '1998-05-01', 'gabriel.rodrigues', 'gabriel.rodrigues', 'gabriel.rodrigues@email.com');

INSERT INTO user(name, last_name, birth, username, password, email) VALUES('gabriel', 'rodrigues', '1998-05-01', 'gabriel.rodrigues', 'gabriel.rodrigues', 'gabriel.rodrigues@email.com');