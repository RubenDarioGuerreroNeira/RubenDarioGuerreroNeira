# 🚀 JavaScript Developer | Full-Stack Enthusiast | BackEnd

Hey there! 👋 I'm **Ruben D. Guerrero**, a passionate **JavaScript Developer** who loves building sleek, responsive web applications with the latest technologies. I thrive on solving complex problems, writing clean code, and continuously learning. Welcome to my GitHub!

## 💼 **Tech Stack**
---

### Frontend
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)

### Databases
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

### Tools & Others
![Webpack](https://img.shields.io/badge/Webpack-8DD06F?style=for-the-badge&logo=webpack&logoColor=black)
![Rollup](https://img.shields.io/badge/Rollup-EC4A3F?style=for-the-badge&logo=rollup.js&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## 🛠️ **Core Skills**
---
- **Web Development**: Building modern, accessible, and responsive web applications.
- **Best Practices**: Utilizing scalable and efficient design patterns.
- **API Integration**: Seamless integration of third-party APIs and services.
- **Testing & Debugging**: Writing robust unit tests and debugging complex issues.
- **Version Control**: Proficient with Git for project management and collaboration.

## 🌐 **Projects**
---

### Medical Appointment API Features:
User Management (Patients, Doctors, Administrators):

The API allows registration, authentication, and management of users with different roles (patient, doctor, administrator).
A role-based system controls permissions and access to different functionalities.
Appointment Creation and Management:

Patients can request appointments with specific doctors, selecting date and time based on doctor availability.
Appointment status (confirmed, canceled, completed) is managed through an enum system, enabling precise tracking of the appointment flow.
Medical History Management:

Each patient's medical history is recorded, including descriptions, diagnoses, treatments, and complex medical data in JSONB format for easy searching and analysis.
The API provides endpoints for creating, reading, updating, and deleting entries in the medical history.
It correctly relates entries to the corresponding patient and associated doctor.
Prescription Management:

Integrates with prescription management, including medication lists, indications, and issuance date.
Allows associating prescriptions with specific appointments.
Includes the possibility of storing the URL of a prescription file.
Medical Note Registration:

Facilitates the creation and management of medical notes associated with appointments.
Offers the option to mark notes as private to control access to sensitive information.
Consultation Document Storage:

Allows uploading and managing documents related to consultations, including file name, document type, file URL, and upload date.
These documents are associated with specific appointments.
Doctor's Schedule Management:

Doctor availability schedules are managed using JSONB format to represent the complexity of schedules.
This enables efficient searching for availability and appointment scheduling.
Technologies and Tools:

NestJS: Node.js framework for building scalable and maintainable applications.
TypeORM: ORM for interacting with the database, simplifying entity and relationship management.
PostgreSQL: Robust relational database for storing information.
JSONB: Format for storing complex data and performing efficient searches.
UUID: Utilization of UUIDs as unique identifiers for entities.
Focus on Efficiency and Scalability:

The API design prioritizes efficiency in data handling, especially for managing medical histories, schedules, and complex medical data.
The use of JSONB allows for optimized searches and queries.
The NestJS architecture and code modularity promote scalability and long-term maintainability.



---

### 🎳 **Bowling Tournament Management System** (2024)
A web application designed to manage bowling tournaments, allowing users to create, organize, and track tournaments easily. Features include:
- **Team & Player Registration**: Players and teams can sign up for tournaments.
- **Score Tracking**: Real-time score tracking and leaderboard updates.
- **Bracket Generation**: Automatic generation of tournament brackets based on participants.
- **Custom Rulesets**: Support for different types of tournament rules and formats.

Tech Stack: 
- **Backend**: Node.js, Nestjs
- **Database**: Postgresql for storing user and tournament data

[🔗 View the Repository](#) | [🎮 Live Demo](#)

---

### 🛒 **Shopping Cart System** (2024)
An e-commerce shopping cart system built with **NestJS** and **PostgreSQL**. The system handles product management, user orders, and cart functionality with real-time updates. Key features include:
- **Product Management**: CRUD operations for products (create, read, update, delete).
- **User Authentication**: Secure user sign-in and registration.
- **Cart Management**: Add, update, and remove items from the shopping cart.
- **Order Processing**: Manage the entire order lifecycle from cart to checkout.

Tech Stack: 
- **Backend**: Node.js, Nestjs
- **Database**: Postgresql for storing user and tournament data

[🔗 View the Repository](#) | [🛍️ Live Demo](#)

---
### Amusement Park API
A RESTful API developed with NestJS and PostgreSQL to manage the operations and functionalities of an amusement park. This system centralizes the management of customers, employees, attractions, tickets, and promotions.

Implemented Functionalities
Customers
Registration of customers to the system after their first visit to the park.
Required basic information: name, ID, phone, email, height, and age.
Minors must associate contact information of a family member.
Restriction on sending promotions or advertisements to minors.

Employees
Management of 5 types of employees:
Administrative: management of stations and attractions.
Logistics: ticket delivery at stations.
Advertising: analysis of frequent customers for promotions.
Operators: height and ticket verification for attraction entry.
Maintenance: updating the status of attractions.
Registration of personal information and work schedules.

Tickets and Stations
Purchase of tickets at 5 stations within the park.
Enabling stations based on occupancy percentage, managed by administrative employees.

Attractions
Registration of attractions with description, classification, and usage conditions.
Verification of height and functional status of the attraction before entry.
Notification to operators if the customer does not meet the required height.
Assigned personnel to the attraction.
Verification of attraction availability based on height and work schedules.
Verification of the attraction's status: Available or Not Available (Damage or Maintenance).

Statistics and Promotions
Calculation of the current occupancy of the park.
Identification of the most and least visited attractions.
Analysis of frequent customers to offer personalized promotions (e.g., discounts for recurring visits).

Technologies Used
Framework: NestJS
Database: PostgreSQL
ORM: TypeORM
Language: TypeScript



- [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ruben-d-guerrero-n-9276bb195/)
- [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rudargeneira@gmail.com)

## ✨ **Let's build something amazing together!**
