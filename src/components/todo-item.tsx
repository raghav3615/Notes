import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const priorityClass = `priority-${todo.priority}`;

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        className={`checkbox ${todo.completed ? 'checked' : ''}`}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>
      <span className={`todo-text ${todo.completed ? 'line-through' : ''}`}>
        {todo.text}
      </span>
      <span className={`priority-badge ${priorityClass}`}>
        {todo.priority[0].toUpperCase()}
      </span>
      <button
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;