import React, { useState } from 'react';
import { Todo } from '../types';

interface TodoInputProps {
  onAdd: (todo: Todo) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
      priority,
    };

    onAdd(newTodo);
    setText('');
    setPriority('medium');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a task... (press Enter)"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <select
          className="priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
        >
          <option value="low">Low</option>
          <option value="medium">Med</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="add-btn">
          +
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
