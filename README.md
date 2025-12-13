Task Manager Application
A full-stack task management application built using **React**, **Node.js**, **Express**, and **MongoDB**.

Features
- Add, edit, delete tasks
- Mark tasks as completed
- Priority & due date support
- Search and filter tasks
- Progress bar for completion
- Responsive UI


Tech Stack
Frontend: React, Axios, CSS  
Backend: Node.js, Express  
Database: MongoDB 

Setup Instructions
1- Clone the repository
git clone https://github.com/ShahanaNazer12/task-manager.git
cd task-manager

2-Backend Setup
cd backend
npm install

Create .env file->
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager

Run backend->
npm run dev

3-Frontend Setup
cd ../frontend
npm install
npm run dev

