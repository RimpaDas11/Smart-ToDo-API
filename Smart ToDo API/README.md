



# 📝 Smart ToDo API

A RESTful backend system for task management built using **Node.js**, **Express**, and **MongoDB**, featuring **JWT-based user authentication** and complete **CRUD operations** for tasks.



## 🚀 Features

* User Registration & Login
* JWT-based Authentication
* Secure Password Hashing (bcrypt)
* Task Management (Create, Read, Update, Delete)
* MongoDB (NoSQL) Database Integration
* RESTful API Design
* Postman Collection for API Testing



## 🛠️ Technologies Used

* **Backend:** Node.js, Express
* **Database:** MongoDB (NoSQL)
* **Authentication:** JSON Web Token (JWT)
* **ODM:** Mongoose
* **API Testing:** Postman



## 📁 Project Structure

```
Smart ToDo API/
│── server.js
│── package.json
│── .env.example
│── README.md
│── Smart_ToDo_API.postman_collection.json
└── src/
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── User.js
    │   └── Task.js
    ├── routes/
    │   ├── authRoutes.js
    │   └── taskRoutes.js
    └── middleware/
        └── authMiddleware.js
```



## 📌 Installation & Execution

Follow the steps below to run the **Smart ToDo API** locally.

### Prerequisites

Ensure the following are installed:

* **Node.js** (v16 or above)
* **npm**
* **MongoDB** (local or Atlas)



### 1️ Clone the Repository

```bash
git clone https://github.com/<your-username>/Smart-ToDo-API.git
cd Smart-ToDo-API
```



### 2️ Install Dependencies

```bash
npm install
```



### 3️ Configure Environment Variables

Create a `.env` file using the example provided:

```bash
cp .env.example .env
```

Edit `.env`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/smarttodo
JWT_SECRET=your_secret_key
```



### 4️ Start MongoDB

Ensure MongoDB is running.

```bash
mongod
```

(or start MongoDB using MongoDB Compass)



### 5️ Run the Application

```bash
npm start
```

You should see:

```
MongoDB Connected
Server running on port 5000
```

The API will be available at:

```
http://localhost:5000
```



## 🔐 API Endpoints

### Authentication

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | `/api/auth/register` |
| POST   | `/api/auth/login`    |



### Tasks (JWT Protected)

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | `/api/tasks`     |
| GET    | `/api/tasks`     |
| PUT    | `/api/tasks/:id` |
| DELETE | `/api/tasks/:id` |



## 🧪 API Testing

* A Postman collection file **`Smart_ToDo_API.postman_collection.json`** is included.
* APIs can be tested using **Postman**.
* All task endpoints require a **JWT Bearer Token**.



## 🔑 Authentication Flow

1. Register a new user
2. Login to receive JWT token
3. Use token in Authorization header:

```
Authorization: Bearer <JWT_TOKEN>
```



## 📦 Submission Details

* Source code pushed to GitHub
* Postman collection included
* Installation & Execution instructions provided
* Fully functional REST backend



## 👩‍💻 Author

**Rimpa Das**
B.Tech CSE Student | Web Developer 



