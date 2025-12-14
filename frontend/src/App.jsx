
import Navbar from "./components/Layout/Navbar";

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TaskList from './components/Tasks/TaskList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import { AuthProvider } from "./components/context/AuthContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
         <BrowserRouter>
          <div className="app">
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <TaskList />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>

      </AuthProvider>
    </ThemeProvider>
       
    
  );
}

export default App;