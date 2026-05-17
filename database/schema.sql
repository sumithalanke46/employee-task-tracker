-- If using MySQL instead of SQLite, you would run this:
-- CREATE DATABASE tasktracker;
-- USE tasktracker;

CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Use AUTO_INCREMENT for MySQL
    employee VARCHAR(255) NOT NULL,
    task VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL
);

-- Note: Spring Boot with SQLite and hibernate.ddl-auto=update will automatically create this table.
-- This file is provided for reference or manual database setup if preferred.
