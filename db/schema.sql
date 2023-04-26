-- IF DATABASE EXISTS -- DROP IT
DROP DATABASE IF EXISTS bookmarks_dev;

-- Create our database! 🪐
CREATE DATABASE bookmarks_dev;

-- Connect to DB
\c bookmarks_dev;

-- Create a table for our bookmarks
CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    category TEXT,
    is_favorite BOOLEAN
);