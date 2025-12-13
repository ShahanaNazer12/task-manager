# Task Manager Application

A full-stack task management application built using **React**, **Node.js**, **Express**, and **MongoDB**.

---

##  Features

- Priority Levels – Assign Low, Medium, or High priority  
- Due Dates – Set deadlines for your tasks  
- Progress Tracking – Visual progress bar showing completion percentage  
- Search Functionality – Search tasks by title  
- Dark / Light Mode – Toggle between themes  
- Fully Responsive – Works on all devices  

---

##  Tech Stack

### Frontend
- React 18.2.0 – UI library  
- React Router DOM – Client-side routing  
- Axios – HTTP requests  
- Vite – Build tool and dev server  
- Context API – State management  

### Backend
- Node.js – Runtime environment  
- Express.js – Web framework  
- MongoDB – NoSQL database  
- Mongoose – MongoDB ODM  
- JWT – Authentication tokens  
- bcryptjs – Password hashing  
- CORS – Cross-origin resource sharing  

---

##  Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ShahanaNazer12/task-manager.git
cd task-manager



2️⃣ Backend Setup
cd backend
npm install

Create .env file->
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager

Run backend->
npm run dev

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev
