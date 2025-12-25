import { Todo } from '../types';

const STORAGE_KEY = 'devtodo_tasks';

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const getTodos = (): Todo[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const clearTodos = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};