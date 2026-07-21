# 📝 Todo Manager

A modern full-stack Todo application built with the **MERN Stack**. It allows users to create, update, organize, and manage daily tasks through a clean and responsive interface.

## ✨ Features

* Create new todos
* View all todos
* Update existing todos
* Delete todos
* Mark todos as completed or pending
* Responsive UI
* Toast notifications
* RESTful API
* Clean project architecture

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Redux Toolkit
* React Router
* Axios
* React Hook Form
* Tailwind CSS
* React Hot Toast
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure

### Frontend

```text
src/
├── api/
├── app/
├── components/
│   ├── common/
│   ├── layout/
│   └── todo/
├── features/
├── layouts/
├── pages/
├── App.jsx
└── main.jsx
```

### Backend

```text
server/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── app.js
└── server.js
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone <your-repository-url>
cd todo-manager
```

---

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend server.

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file inside the `client` folder.

```env
VITE_API_URL=http://localhost:5000/api/todos
```

Start the frontend.

```bash
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/todos`     | Get all todos     |
| GET    | `/api/todos/:id` | Get a single todo |
| POST   | `/api/todos`     | Create a todo     |
| PATCH  | `/api/todos/:id` | Update a todo     |
| DELETE | `/api/todos/:id` | Delete a todo     |

---

## 📷 Screenshots

Add screenshots of the application here after deployment.

---

## 🌐 Deployment

### Frontend

Deploy using **Vercel**.

### Backend

Deploy using **Render**.

---

## 🔮 Future Improvements

* Search todos
* Filter by status
* Due date reminders
* Pagination
* Authentication

---

## 👨‍💻 Author

**Anurag Dangi**

* GitHub: https://github.com/your-github-username
* LinkedIn: https://linkedin.com/in/your-linkedin-username

---

## 📄 License

This project is licensed under the MIT License.
