import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Simulación de una llamada a una API externa para obtener tareas
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then((response) => response.json())
        .then((data) => {
          setTasks(data);
        });
    }, 1000);
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObj = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Aplicación para una Lista de Tareas</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;