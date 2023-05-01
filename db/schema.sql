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
-- always drop the table if it exists
DROP TABLE IF EXISTS reviews;

-- Create a table for our bookmarks reviews
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    bookmark_id INTEGER REFERENCES bookmarks (id)
    ON DELETE CASCADE
);