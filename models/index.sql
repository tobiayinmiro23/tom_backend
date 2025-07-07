CREATE DATABASE tom;
CREATE TABLE Comments(
    id TEXT UNIQUE NOT NULL,
    username TEXT NOT NULL,
    comments TEXT NOT NULL,
    photoId TEXT NOT NULL,
    usersId TEXT NOT NULL,
    time TEXT NOT NULL
    
)
CREATE TABLE Users(
    id  TEXT UNIQUE NOT NULL,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL   
)

