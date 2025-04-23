
// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAdd({ title, description, dueDate, priority, completed: false });
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('Medium');
    }
  };

  return (
    <form className="mb-4 p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="p-2 w-full border border-gray-300 rounded mt-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Task Description</label>
        <textarea
          className="p-2 w-full border border-gray-300 rounded mt-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Due Date</label>
        <input
          type="date"
          className="p-2 w-full border border-gray-300 rounded mt-1"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          className="p-2 w-full border border-gray-300 rounded mt-1"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>
      <button
        type="submit"
        className="p-2 w-full bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
