// App.js
import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await fetchTasks();
    setTasks(response.data);
  };

  const addTask = async (task) => {
    await createTask(task);
    loadTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const modifyTask = async (task) => {
    await updateTask(task._id, task);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={removeTask} onUpdate={modifyTask} />
      </div>
    </div>
  );
};

export default App;

