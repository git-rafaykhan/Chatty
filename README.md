# 💬 Chatty – Real-Time Chat Application

**Chatty** is a real-time group and individual chat application built using modern web technologies. It supports secure messaging, user authentication, contact management, and real-time communication via WebSockets.

---

## 🌐 Live Demo

🔗 [Visit Chatty App](https://your-live-link.com)

🧪 **Test Users:**  
- User A: `user1@example.com` / `password123`  
- User B: `user2@example.com` / `password123`

---

## ⚙️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React, Tailwind CSS, Axios        |
| Backend    | Node.js, Express.js, MongoDB      |
| Realtime   | Socket.io                         |
| Auth       | JWT (JSON Web Token)              |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## ✨ Features

- 🔐 JWT-based Login & Signup  
- 💬 One-to-One & Group Chat  
- 🟢 Real-Time Messaging with Socket.io  
- 🧾 Chat History & Message Timestamps  
- 👥 Add/Remove Contacts  
- ✨ Typing Indicator (coming soon)  
- 📱 Responsive Design for Mobile/Desktop

---

## 📦 API Endpoints

| Method | Endpoint                     | Description                    |
|--------|------------------------------|--------------------------------|
| POST   | `/api/v1/auth/signup`        | Register new user              |
| POST   | `/api/v1/auth/login`         | Login user                     |
| GET    | `/api/v1/users`              | Get user list / search users   |
| GET    | `/api/v1/chats`              | Get chat history               |
| POST   | `/api/v1/chats/send`         | Send message                   |
| POST   | `/api/v1/chats/group`        | Create group chat              |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatty.git
cd chatty
