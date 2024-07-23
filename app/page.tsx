"use client";
import { useState, useEffect } from "react";
import { TodoInput, TodoList } from "@/components";
import { Todo } from "@/models/Todo";
import { addTodo, getAllTodos } from "./api/todos";

export default function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllTodos()
      .then((data) => {
        setTodos(data.todos);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      await addTodo({
        id: Date.now().toString(),
        todo: todo,
        isDone: false,
        createdAt: new Date(),
      });
      // setTodos([...todos, { id: Date.now().toString(), todo, isDone: false }])
      setTodo("");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container mx-auto mt-4 p-2">
      <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <div className="flex flex-col md:flex-row gap-2 mt-5">
        <div className="w-full flex flex-col items-center">
          <h1 className="font-montserrat text-lg font-semibold">Todos</h1>
          <TodoList todos={todos} setTodos={setTodos} listType="pending" />
        </div>
        {/* <div className="w-full flex flex-col items-center">
          <h1 className="font-montserrat text-lg font-semibold">Completed</h1>
          <TodoList todos={todos} setTodos={setTodos} listType="complete" />
        </div> */}
      </div>
    </section>
  );
}
