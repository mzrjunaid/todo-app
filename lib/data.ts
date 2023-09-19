import { Todo } from "@/models/Todo";

let todos: Todo[] = [];

export const getTodos = () => todos;

export const addTodos = (todo: Todo) => {
  todos.push(todo);
};

export const deleteTodo = (id: string) => {
  todos = todos.filter((todo) => todo.id !== id);
};

export const updateTodo = (id: string, todo: string, isDone: boolean) => {
  const oldTodo = todos.find((todo) => todo.id === id);

  if (todo) {
    oldTodo!.todo = todo;
    oldTodo!.isDone = isDone;
  } else {
    throw new Error("No Todo Found");
  }
};

export const getById = (id: string) => {
  return todos.find((todo) => todo.id === id);
};
