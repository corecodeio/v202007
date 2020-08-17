CREATE TABLE users
{
    id SERIAL,
    number VARCHAR(20) NOT NULL,
    verify TINYINT(1) NOT NULL,
    name VARCHAR(45) NULL,
    email VARCHAR(45) NULL,
    PRIMARY KEY(id)
}