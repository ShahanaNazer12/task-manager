import { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editTask, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: ''
  });

  useEffect(() => {
    if (editTask) {
      setFormData({
        title: editTask.title,
        description: editTask.description || '',
        priority: editTask.priority,
        dueDate: editTask.dueDate ? editTask.dueDate.split('T')[0] : ''
      });
    } else {
      
      setFormData({
        title: '',
        description: '',
        priority: 'medium',
        dueDate: ''
      });
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editTask) {
      setFormData({
        title: '',
        description: '',
        priority: 'medium',
        dueDate: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-row">
        <input
          type="text"
          placeholder="Task title *"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div className="form-row">
        <textarea
          placeholder="Description (optional)"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows="3"
        />
      </div>
      <div className="form-row-group">
        <select
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
        >
          <option value="low"> Low Priority</option>
          <option value="medium"> Medium Priority</option>
          <option value="high"> High Priority</option>
        </select>
        <input
          type="date"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {editTask ? ' Update Task' : ' Add Task'}
        </button>
        {editTask && (
          <button type="button" onClick={onCancel} className="btn-secondary">
             Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;