# Employee Task Tracker

A full-stack, beginner-friendly Employee Task Tracker application demonstrating HTML, CSS, JavaScript, Spring Boot (Java), and Database (SQLite) integration.

## Features

*   **Frontend**: Built with vanilla HTML, CSS (modern gradient dashboard design), and JavaScript.
*   **Backend**: Built with Java 17 and Spring Boot (Spring Web, Spring Data JPA).
*   **Database**: Uses SQLite by default for easy local setup (no separate SQL server installation required).
*   **API**: RESTful endpoints for GET (fetch tasks), POST (add task), and DELETE (remove task).

## Prerequisites

*   [Java Development Kit (JDK) 17](https://adoptium.net/) or higher
*   [Maven](https://maven.apache.org/download.cgi) installed (or run through an IDE like IntelliJ/Eclipse)
*   A web browser (Chrome, Firefox, etc.)

## Project Structure

```
ett/
├── backend/                  # Spring Boot Java Application
│   ├── src/
│   │   └── main/
│   │       ├── java/com/tracker/...
│   │       └── resources/application.properties
│   └── pom.xml
├── frontend/                 # Static web files
│   ├── index.html
│   ├── style.css
│   └── script.js
├── database/                 # Reference SQL files
│   └── schema.sql
└── README.md
```

## How to Run the Backend (Spring Boot)

1. Open your terminal or command prompt.
2. Navigate to the `backend` directory:
   ```bash
   cd path/to/ett/backend
   ```
3. Run the Spring Boot application using Maven:
   ```bash
   mvn spring-boot:run
   ```
4. The server will start on `http://localhost:8080`.
   *(Note: The database table will be automatically created in a local `tasktracker.db` file thanks to Hibernate.)*

## How to Run the Frontend

1. Simply open the `frontend/index.html` file in your preferred web browser. 
   *(You can double-click the file or right-click and choose "Open With" -> Chrome/Edge/Firefox).*
2. The frontend will communicate directly with the running backend on port 8080.

## Usage

1. **Add a task**: Fill in the Employee Name, Task Description, and Status, then click "Add Task".
2. **View tasks**: The table will automatically display current tasks fetched from the backend database.
3. **Delete a task**: Click the red "Delete" button next to any task to remove it from the system.
