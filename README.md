# 💬 Chatty – Real-Time Chat Application

🔗 **Live Demo:** [Chatty App](https://chatty-sdul.vercel.app)

**Chatty** is a modern real-time chat application that supports **one-to-one** and **group messaging**.  
It comes with **secure authentication**, **contact management**, and **instant communication** powered by **WebSockets**.

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

- 🔐 **Secure JWT-based Login & Signup**  
- 💬 **One-to-One & Group Chats**  
- 🟢 **Real-Time Messaging** with Socket.io  
- 🧾 **Chat History** & Message Timestamps  
- 👥 **Add / Remove Contacts**  
- ✨ **Typing Indicator** *(coming soon)*  
- 📱 **Responsive Design** (Mobile & Desktop)  

---

## 🧪 Test Users

You can log in using these test accounts:

- **User A** → `user1@example.com` / `password123`  
- **User B** → `user2@example.com` / `password123`  

---

## 📦 API Endpoints

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| POST   | `/api/v1/auth/signup` | Register new user            |
| POST   | `/api/v1/auth/login`  | Login user                   |
| GET    | `/api/v1/users`       | Get user list / search users |
| GET    | `/api/v1/chats`       | Get chat history             |
| POST   | `/api/v1/chats/send`  | Send message                 |
| POST   | `/api/v1/chats/group` | Create group chat            |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/chatty.git
cd chatty
