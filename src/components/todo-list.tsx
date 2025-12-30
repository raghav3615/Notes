import React from 'react';
import { Todo, FilterType } from '../types';
import TodoItem from './todo-item';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, filter, onToggle, onDelete }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Sort by priority (high first) then by creation date (newest first)
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return b.createdAt - a.createdAt;
  });

  if (sortedTodos.length === 0) {
    return (
      <div className="todo-list-empty">
        <p className="empty-icon">📋</p>
        <p className="empty-text">
          {filter === 'all' && 'No tasks yet. Add one above.'}
          {filter === 'active' && 'No active tasks. Nice work!'}
          {filter === 'completed' && 'No completed tasks yet.'}
        </p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;