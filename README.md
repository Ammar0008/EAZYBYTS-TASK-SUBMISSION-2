Inventory Management System
Overview
This Inventory Management System is a full-stack application built using Java Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend. The system allows users to manage products, track inventory levels, and process orders efficiently.

Features
Product Management: Add, view, and manage product details including name, quantity, and price.
Order Processing: Place orders and update inventory based on order quantity.
Inventory Tracking: Track available inventory and ensure accurate stock levels.
RESTful API: The backend provides RESTful endpoints for interaction with the frontend.
H2 Database: Uses an in-memory H2 database for lightweight and fast data storage.
Technologies Used
Frontend: HTML5, CSS3, JavaScript
Backend: Java, Spring Boot
Database: H2 (In-Memory)
Build Tool: Maven

Prerequisites
Java  21,22,17
Maven
A code editor or IDE (e.g., VS Code, IntelliJ IDEA)


Steps to Run
Clone the repository:

bash
Copy code
git clone <repository-url>
cd inventory-management-system
Navigate to the backend directory:

bash
Copy code
cd backend
Build and run the Spring Boot application:

bash
Copy code
mvn spring-boot:run
Access the application:

Open a web browser and go to http://localhost:8080.
Accessing the H2 Database
To view the H2 database console:

Go to http://localhost:8080/h2-console.
Use the following settings:
JDBC URL: jdbc:h2:mem:inventorydb
Username: sa
Password: password

