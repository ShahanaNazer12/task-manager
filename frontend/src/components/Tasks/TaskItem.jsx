const TaskItem = ({ task, onUpdate, onDelete, onEdit }) => {
  const handleToggle = () => {
    onUpdate(task._id, { ...task, completed: !task.completed });
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  };

  const getPriorityClass = () => {
    return `priority-${task.priority}`;
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-check">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
      </div>
      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <div className="task-meta">
          <span className={`priority-badge ${getPriorityClass()}`}>
            {task.priority}
          </span>
          {task.dueDate && (
            <span className="due-date">📅 {formatDate(task.dueDate)}</span>
          )}
        </div>
      </div>
      <div className="task-actions">
        <button 
          onClick={() => onEdit(task)} 
          className="btn-edit"
          title="Edit task"
        >
          ✏️
        </button>
        <button 
          onClick={() => onDelete(task._id)} 
          className="btn-delete"
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;