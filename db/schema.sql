DROP DATABASE IF EXISTS tech_blog_db;

CREATE DATABASE tech_blog_db;

USE tech_blog_db;

CREATE TABLE User(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(30),
  password VARCHAR(30)
)

CREATE Posts(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title  VARCHAR(50),
  constent VARCHAR(300),
   
)