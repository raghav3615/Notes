import React, { useState, useEffect } from 'react';
import { Todo, FilterType } from './types';
import { getTodos, saveTodos } from './utils/storage';
import Navbar from './components/navbar';
import Hero from './components/hero';
import TodoInput from './components/todo-input';
import FilterBar from './components/filter-bar';
import TodoList from './components/todo-list';
import Footer from './components/footer';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = getTodos();
    setTodos(savedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const hasCompleted = completedCount > 0;

  return (
    <div className="app">
      <Navbar totalTasks={todos.length} completedTasks={completedCount} />
      <main className="main-content">
        <Hero />
        <div className="todo-container">
          <TodoInput onAdd={addTodo} />
          <FilterBar
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
            hasCompleted={hasCompleted}
          />
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;