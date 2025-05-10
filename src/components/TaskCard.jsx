import React from 'react';

const TaskCard = ({ task, onStatusChange, onDelete }) => {
  // Function to get color class based on priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to get color class based on category
  const getCategoryColor = (category) => {
    switch (category) {
      case 'work':
        return 'bg-blue-100 text-blue-800';
      case 'personal':
        return 'bg-green-100 text-green-800';
      case 'finance':
        return 'bg-purple-100 text-purple-800';
      case 'health':
        return 'bg-red-100 text-red-800';
      case 'learning':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border-l-4 border-l-blue-500 relative group">
      {/* Status checkbox */}
      <div className="absolute -top-3 -right-3">
        <input 
          type="checkbox" 
          checked={task.status === 'completed'} 
          onChange={() => onStatusChange(task.id)}
          className="h-6 w-6 rounded-full border-2 border-gray-300 checked:bg-green-500 transition-colors cursor-pointer shadow-md"
        />
      </div>
      
      {/* Delete button (shows on hover) */}
      <button 
        onClick={() => onDelete(task.id)}
        className="absolute top-2 right-10 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Task title with completed styling */}
      <h3 className={`text-lg font-semibold mb-2 pr-8 ${task.status === 'completed' ? 'line-through text-gray-500' : ''}`}>
        {task.title}
      </h3>
      
      {/* Task description */}
      <p className="text-gray-600 mb-3 text-sm">{task.description}</p>
      
      {/* Task metadata */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
        <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(task.category)}`}>
          {task.category}
        </span>
        <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 ml-auto">
          Due: {formatDate(task.dueDate)}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;