import { Todo } from "@/models/Todo";
import React from "react";

export interface CustomButtonProps {
  children: React.ReactNode;
  btnStyle?: string;
  btnType: "button" | "submit";
  btnTitle?: string;
  clickHandle?: () => void;
}

export interface TodoInputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  listType?: "complete" | "pending";
}

export interface TodoItemProps extends TodoListProps {
  todo: Todo;
}
