import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};

export default Task;