const ProgressBar = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>Progress: {completed}/{total} tasks completed</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;