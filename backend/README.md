# Primetrade.ai Internship Assignment

This project is a full-stack application built as part of an internship assignment.  
It demonstrates secure authentication, role-based access control, CRUD operations, and a clean, scalable backend architecture with a minimal frontend for interaction.

---

## 🚀 Tech Stack

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- bcrypt (password hashing)
- express-validator

### Frontend
- React (Vite)
- Axios
- React Router
- Tailwind CSS

---

## 🔐 Features

### Authentication & Authorization
- User registration & login
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control (user / admin)

### Tasks (CRUD)
- Create tasks (authenticated users)
- View own tasks
- Update tasks
- Delete tasks (admin only)

### Security
- JWT verification middleware
- Backend-enforced role checks
- Input validation using express-validator
- Protected frontend routes (server-verified)

---

## 📦 API Endpoints

### Auth
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me` (protected)

### Tasks
- `GET /api/v1/tasks` (protected)
- `POST /api/v1/tasks` (protected)
- `PUT /api/v1/tasks/:id` (protected)
- `DELETE /api/v1/tasks/:id` (admin only)

---

## 🖥️ Frontend Functionality

- Register & Login forms
- Protected dashboard
- Role-aware UI (admin vs user)
- Task creation & listing
- Admin-only delete option
- Clean UI using Tailwind CSS

---

## ⚙️ Setup Instructions

### Backend
```bash
cd backend
npm install
npm run dev
