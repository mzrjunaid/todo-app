import { Todo } from "@/models/Todo";

const baseUrl = "http://localhost:3000";

interface ApiResponse {
  message: string;
  todos: Todo[];
}

export const getAllTodos = async (): Promise<ApiResponse> => {
  const res = await fetch(`${baseUrl}/api/todos`, {
    cache: "no-store",
  });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`${baseUrl}/api/todos`, {
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
  const res = await fetch(`${baseUrl}/api/todos/${id}`, {
    method: "DELETE",
  });
};
