# 🚀 Scalable REST API with JWT Authentication

## 📌 Overview

This project is a full-stack web application built as part of a backend assignment.
It demonstrates a **scalable REST API** using Django REST Framework and a minimal React frontend for API interaction.

---

## ⚙️ Features

### 🔐 Authentication

* User Registration
* JWT-based Login
* Secure token handling

### 👤 Role-Based Access

* Admin → Access all tasks
* User → Access only their tasks

### 📦 Task Management (CRUD)

* Create Task
* View Tasks
* Delete Task

### 🎯 Frontend

* Minimal React UI for testing APIs
* Clean and simple interface (assignment-focused)

---

## 🏗️ Tech Stack

### Backend

* Python
* Django
* Django REST Framework
* JWT Authentication (SimpleJWT)

### Frontend

* React.js
* Axios

---

## 📁 Project Structure

backend/
├── users/
├── tasks/
├── config/

frontend/
├── src/
│   ├── pages/

---

## 🔌 API Endpoints

### Auth

* POST `/api/v1/users/register/`
* POST `/api/v1/users/login/`

### Tasks

* GET `/api/v1/tasks/`
* POST `/api/v1/tasks/`
* DELETE `/api/v1/tasks/{id}/`

---

## 🛠️ Setup Instructions

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔒 Authentication Usage

Include token in headers:

```
Authorization: Bearer <your_token>
```

---

## 📈 Scalability Considerations

* Modular app structure (users, tasks)
* Role-based permission system
* API versioning (`/api/v1/`)
* Easily extendable for new modules

---

## 🎯 Key Highlights

* Clean and maintainable backend architecture
* Secure authentication with JWT
* Proper separation of concerns
* Minimal UI focused on functionality

---

## 👨‍💻 Author

Vikas B
