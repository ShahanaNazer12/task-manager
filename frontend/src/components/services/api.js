import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data) => API.post('/auth/register', data),
  login: (data) => API.post('/auth/login', data),
  getProfile: () => API.get('/auth/profile')
};

export const taskAPI = {
  getTasks: (params) => API.get('/tasks', { params }),
  createTask: (data) => API.post('/tasks', data),
  updateTask: (id, data) => API.put(`/tasks/${id}`, data),
  deleteTask: (id) => API.delete(`/tasks/${id}`)
};

export default API;