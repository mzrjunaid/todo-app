import { Todo } from "@/models/Todo";

const baseUrl = "http://localhost:3000";

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`${baseUrl}/todos`, {
    cache: "no-store",
  });
  const todos = await res.json();

  return todos;
};

export const addTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  const res = await fetch(`${baseUrl}/todos/${id}`, {
    method: "DELETE",
  });
};
