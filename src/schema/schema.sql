CREATE TABLE users (
  id SERIAL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE accounts (
  id SERIAL,
  userId SERIAL NOT NULL,
  money float NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES Users
);
