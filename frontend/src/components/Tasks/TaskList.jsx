import { useState, useEffect } from 'react';

import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import ProgressBar from '../Layout/ProgressBar';
import { taskAPI } from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTasks();
  }, [filter, search]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const { data } = await taskAPI.getTasks({ filter, search });
      setTasks(data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (formData) => {
    try {
      await taskAPI.createTask(formData);
      fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create task');
    }
  };

  const handleUpdate = async (id, formData) => {
    try {
      await taskAPI.updateTask(id, formData);
      fetchTasks();
      setEditTask(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update task');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await taskAPI.deleteTask(id);
        fetchTasks();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete task');
      }
    }
  };
  const handleEdit = (task) => {
    setEditTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditTask(null);
  };

  return (
    <div className="task-list-container">
      <ProgressBar tasks={tasks} />
      
      <div className="task-form-section">
        <h2>{editTask ? 'Edit Task' : 'Add New Task'}</h2>
        <TaskForm
          onSubmit={editTask ? (data) => handleUpdate(editTask._id, data) : handleCreate}
          editTask={editTask}
          onCancel={() => setEditTask(null)}
        />
      </div>

      <TaskFilter 
        filter={filter} 
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading tasks...</div>
      ) : tasks.length === 0 ? (
        <div className="no-tasks">
          <p>No tasks found. Add your first task above!</p>
        </div>
      ) : (
        <div className="tasks-grid">
          {tasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;