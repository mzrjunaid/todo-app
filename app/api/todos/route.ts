import { addTodos, getTodos } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Request) => {
  try {
    const todos = getTodos();
    return NextResponse.json({ message: "OK", todos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Request) => {
  const { todo, isDone } = await req.json();
  try {
    const newTodo = {
      id: Date.now().toString(),
      todo,
      isDone,
      createdAt: new Date(),
    };
    addTodos(newTodo);
    return NextResponse.json({ message: "OK", newTodo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
