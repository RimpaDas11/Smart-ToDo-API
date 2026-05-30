# 📝 Smart ToDo API

<div align="center">

### Secure Task Management REST API with Authentication

A scalable backend system for managing tasks with user authentication, authorization, and complete CRUD functionality.

---

**Node.js • Express.js • MongoDB • JWT • REST API**

</div>

---

# 🚀 Overview

Smart ToDo API is a RESTful backend application designed to help users securely manage their daily tasks and activities.

The system provides user authentication, task management, and protected API routes using JSON Web Tokens (JWT). Built with Node.js, Express, and MongoDB, it follows modern backend development practices and demonstrates the implementation of secure, scalable, and maintainable APIs.

This project showcases real-world backend development concepts including authentication, database integration, middleware, API security, and CRUD operations.

---

# 🌟 Key Features

### 🔐 User Authentication

Secure registration and login functionality using JWT authentication.

### 🔑 Authorization

Protected routes ensure only authenticated users can access their tasks.

### 🔒 Password Security

Passwords are hashed using bcrypt before being stored in the database.

### ✅ Task Management

Perform complete CRUD operations:

* Create Tasks
* Read Tasks
* Update Tasks
* Delete Tasks

### 🗄️ MongoDB Integration

Uses MongoDB as the primary NoSQL database.

### 📡 RESTful Architecture

Follows REST API design principles for scalability and maintainability.

### 🧪 Postman Testing Support

Includes a ready-to-use Postman collection for API testing.

---

# 🏗️ System Architecture

```text
Client Request
      │
      ▼
Express Server
      │
      ▼
Authentication Middleware
(JWT Verification)
      │
      ▼
API Routes
      │
      ├── Authentication Routes
      └── Task Routes
      │
      ▼
MongoDB Database
      │
      ▼
Response to Client
```

---

# 🛠️ Technology Stack

| Category            | Technology |
| ------------------- | ---------- |
| Runtime Environment | Node.js    |
| Backend Framework   | Express.js |
| Database            | MongoDB    |
| ODM                 | Mongoose   |
| Authentication      | JWT        |
| Password Security   | bcrypt     |
| API Testing         | Postman    |

---

# 📂 Project Structure

```text
Smart-ToDo-API/
│
├── server.js
├── package.json
├── .env.example
├── README.md
├── Smart_ToDo_API.postman_collection.json
│
└── src/
    ├── config/
    │   └── db.js
    │
    ├── models/
    │   ├── User.js
    │   └── Task.js
    │
    ├── routes/
    │   ├── authRoutes.js
    │   └── taskRoutes.js
    │
    └── middleware/
        └── authMiddleware.js
```

---

# ⚙️ Installation

## Prerequisites

Make sure the following are installed:

* Node.js (v16 or higher)
* npm
* MongoDB (Local or Atlas)

---

## Clone Repository

```bash
git clone https://github.com/your-username/Smart-ToDo-API.git
cd Smart-ToDo-API
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file:

```bash
cp .env.example .env
```

Add the following configuration:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smarttodo
JWT_SECRET=your_secret_key
```

---

## Start MongoDB

```bash
mongod
```

or use MongoDB Atlas.

---

## Run the Application

```bash
npm start
```

Expected Output:

```text
MongoDB Connected
Server running on port 5000
```

---

# 🌐 API Base URL

```text
http://localhost:5000
```

---

# 🔐 Authentication Endpoints

| Method | Endpoint           | Description                 |
| ------ | ------------------ | --------------------------- |
| POST   | /api/auth/register | Register a new user         |
| POST   | /api/auth/login    | Login and receive JWT token |

---

# ✅ Task Endpoints (Protected)

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| POST   | /api/tasks     | Create Task   |
| GET    | /api/tasks     | Get All Tasks |
| PUT    | /api/tasks/:id | Update Task   |
| DELETE | /api/tasks/:id | Delete Task   |

---

# 🔑 Authentication Flow

### Step 1 — Register

Create a new account.

### Step 2 — Login

Authenticate and receive a JWT token.

### Step 3 — Access Protected Routes

Include the token in request headers:

```http
Authorization: Bearer <JWT_TOKEN>
```

### Step 4 — Manage Tasks

Perform CRUD operations securely.

---

# 🧪 API Testing

A Postman collection is included:

```text
Smart_ToDo_API.postman_collection.json
```

Use Postman to:

* Register users
* Login
* Generate JWT tokens
* Test task endpoints

---

# 📊 Features Demonstrated

This project demonstrates:

* REST API Development
* Backend Architecture
* JWT Authentication
* Route Protection
* Password Hashing
* MongoDB Integration
* Express Middleware
* CRUD Operations
* API Testing

---

# 💡 Real-World Applications

### 📋 Task Management Systems

Personal and team productivity applications.

### 🏢 Enterprise Applications

User-specific task and workflow management.

### 📚 Learning Projects

Understanding backend development concepts.

### ☁️ SaaS Platforms

Foundation for scalable productivity tools.

---

# 🔮 Future Enhancements

### 📅 Due Dates & Reminders

Add task deadlines and notifications.

### 🏷️ Task Categories

Organize tasks with labels and categories.

### 📊 Analytics Dashboard

Track task completion statistics.

### 👥 Team Collaboration

Shared tasks and team workspaces.

### 🔔 Email Notifications

Reminder emails for pending tasks.

### 🌐 Frontend Integration

Connect with React, Next.js, or Angular applications.

---

# 🎓 Learning Outcomes

Through this project, developers can learn:

* RESTful API Design
* Authentication & Authorization
* MongoDB & Mongoose
* Backend Development with Express
* Security Best Practices
* API Testing with Postman

---

# ⚠️ Disclaimer

This project is developed for educational and learning purposes. It demonstrates backend development concepts and secure API implementation using modern JavaScript technologies.

---

# 👩‍💻 Developer

## Rimpa Das

B.Tech Computer Science & Engineering
Brainware University

Passionate about Backend Development, Web Technologies, Database Management, and building scalable applications.

### Technical Skills Demonstrated

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* REST API Development
* bcrypt
* Postman

---

*"Building secure, scalable, and efficient backend systems through modern web technologies."*

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🚀 Share it with others

---

<div align="center">

# 📝 Smart ToDo API

### Secure Task Management Through Modern Backend Development

**Node.js • Express • MongoDB • JWT • REST APIs**

Built with ❤️ by Rimpa Das

</div>
