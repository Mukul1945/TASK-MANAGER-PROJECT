// TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id} className="p-4 mb-2 bg-white rounded shadow flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            <p className="text-sm text-gray-500">Priority: {task.priority}</p>
          </div>
          <div>
            {/* <button
              onClick={() => onUpdate({ ...task, completed: !task.completed })}
              className={`p-2 text-white rounded ${task.completed ? 'bg-blue-500' : 'bg-gray-500'} mr-2`}
            >
              {task.completed ? 'Completed' : 'Incomplete'}
            </button> */}
            <button
              onClick={() => onDelete(task._id)}
              className="p-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

