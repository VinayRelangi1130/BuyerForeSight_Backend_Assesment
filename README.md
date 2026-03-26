# BuyerForeSight_Backend_Assesment

# 🚀 User Management REST API

## 📌 Overview

This project is a RESTful API built using Node.js and SQLite to manage users. It supports CRUD operations along with search and sorting functionality.

---

## 🛠 Tech Stack

* Node.js
* Express.js
* SQLite3

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/BuyerForeSight_Backend_Assesment.git
cd BuyerForeSight_Backend_Assesment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node index.js
```

Server runs at:
http://localhost:3000

---

## 📊 Database Schema

Table: **users**

| Column | Type    | Description                |
| ------ | ------- | -------------------------- |
| id     | INTEGER | Auto-increment primary key |
| name   | TEXT    | User name                  |
| email  | TEXT    | User email                 |

---

## 📡 API Endpoints

### 🔹 GET /users

Get all users

Query Parameters:

* `search` → filter users by name
* `sort=name`
* `order=asc | desc`

Example:

```bash
GET /users?search=vinay&sort=name&order=asc
```

---

### 🔹 GET /users/:id

Get a single user by ID

---

### 🔹 POST /users

Create a new user

```json
{
  "name": "Vinay",
  "email": "vinay@gmail.com"
}
```

---

### 🔹 PUT /users/:id

Update user details

---

### 🔹 DELETE /users/:id

Delete a user

---

## ⚡ Features

* Full CRUD operations
* Search using SQL LIKE
* Sorting using ORDER BY
* SQLite database integration
* Secure queries (prevents SQL injection)

---

## 🧠 Design Decisions

* Used SQLite for lightweight and simple database setup
* Used parameterized queries for security
* Followed REST API standards for endpoint design

---

## 🎯 Conclusion

This project demonstrates backend fundamentals including API development, database handling, and clean code practices.
