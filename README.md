# 📋 Task Manager

A full-stack Task Manager application built with **Node.js + Express + MongoDB** (backend) and **React + Tailwind CSS** (frontend).

---

## 🗂️ Project Structure

```
TaskManager/
├── backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controllers/
│   │   └── TaskControllers.js     # CRUD business logic
│   ├── middleware/
│   │   └── errorMiddleware.js     # Error handling
│   ├── models/
│   │   └── Task.js                # Mongoose schema
│   ├── routes/
│   │   └── taskRoutes.js          # API routes
│   ├── .env                       # Environment variables
│   ├── package.json
│   └── server.js                  # Entry point
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   ├── axios.js           # Axios base config
    │   │   └── taskApi.js         # API call functions
    │   ├── Components/
    │   │   ├── FilterBar.jsx
    │   │   ├── TaskForm.jsx
    │   │   └── TaskItem.jsx
    │   ├── hooks/
    │   │   └── useTasks.js        # Custom React hook
    │   ├── pages/
    │   │   └── TasksPage.jsx      # Main page
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

## ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/try/download/community) running locally **OR** a [MongoDB Atlas](https://www.mongodb.com/atlas) account

---

## ⚙️ Environment Setup

Create a `.env` file inside the `backend/` folder:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
```

> Using MongoDB Atlas? Replace `MONGO_URI` with your Atlas connection string:
> ```
> MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/taskmanager
> ```

---

## 🚀 How to Run

### Step 1 — Install & start the Backend

```bash
cd backend
npm install
npm run dev
```

> Server starts at **http://localhost:5000**
> You should see: `✅ MongoDB Connected` and `🚀 Server running on http://localhost:5000`

---

### Step 2 — Install & start the Frontend

Open a **new terminal**:

```bash
cd frontend
npm install
npm run dev
```

> App starts at **http://localhost:5173**

---

## 🌐 API Endpoints

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | `/api/tasks`      | Get all tasks     |
| GET    | `/api/tasks/:id`  | Get single task   |
| POST   | `/api/tasks`      | Create a task     |
| PUT    | `/api/tasks/:id`  | Update a task     |
| DELETE | `/api/tasks/:id`  | Delete a task     |

### Request Body (POST / PUT)

```json
{
  "title": "My Task",
  "description": "Optional description",
  "completed": false
}
```

---

## 🧩 Features

- ➕ Add tasks with title and description
- 📋 View all tasks with status badges
- ✏️ Edit any task inline
- ✅ Toggle tasks between Pending and Completed
- 🗑️ Delete tasks with confirmation
- 🔍 Filter by All / Pending / Completed
- 📊 Live progress bar and task counters

---

## 🛠️ Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | React 18, Tailwind CSS v4, Vite |
| Backend    | Node.js, Express.js            |
| Database   | MongoDB, Mongoose              |
| HTTP Client| Axios                          |

---

## ❗ Troubleshooting

**Tailwind CSS not working?**
- Make sure `src/index.css` contains `@import "tailwindcss";`
- Make sure `vite.config.js` includes the `@tailwindcss/vite` plugin
- Make sure `index.css` is imported in `main.jsx`

**Cannot connect to backend?**
- Make sure MongoDB is running locally (`mongod`)
- Make sure the backend is running on port `5000`
- Check the `MONGO_URI` value in `backend/.env`

**`axios` not found error?**
```bash
cd frontend
npm install axios
```