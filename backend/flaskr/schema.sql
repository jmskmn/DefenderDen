DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS class;
DROP TABLE IF EXISTS class_rating;
CREATE TABLE user (
  email TEXT PRIMARY KEY NOT NULL,
  role TEXT NOT NULL,
  banned BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE class (
  name TEXT PRIMARY KEY NOT NULL,  -- The primary key for the class
  description TEXT NOT NULL,
  current BOOLEAN NOT NULL DEFAULT 1
);

CREATE TABLE class_code (
  class_name TEXT NOT NULL,  -- References the class name
  code TEXT NOT NULL,        -- The code for the class (e.g., CMSC, ENG)
  number INTEGER NOT NULL,   -- The class number (e.g., 115)
  PRIMARY KEY (class_name, code, number),
  FOREIGN KEY (class_name) REFERENCES class (name)
);

CREATE TABLE class_rating (
  rater_email TEXT NOT NULL,
  class_name TEXT NOT NULL,  -- Foreign key to the class name
  stars INTEGER CHECK(stars BETWEEN 1 AND 5) NOT NULL,
  difficulty INTEGER CHECK(difficulty BETWEEN 1 AND 5) NOT NULL,
  amount_of_work INTEGER CHECK(amount_of_work BETWEEN 1 AND 5) NOT NULL,
  text TEXT NOT NULL,
  FOREIGN KEY (rater_email) REFERENCES user (email),
  FOREIGN KEY (class_name) REFERENCES class (name),
  PRIMARY KEY (rater_email, class_name)
);