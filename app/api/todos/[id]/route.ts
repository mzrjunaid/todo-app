import { deleteTodo, getById, updateTodo } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("todos/")[1];
    const todo = getById(id);
    if (!todo) {
      return NextResponse.json({ message: "Todo not Found" }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", todo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};

export const PUT = async (req: Request, res: Request) => {
  try {
    const { todo, isDone } = await req.json();
    const id = req.url.split("todos/")[1];
    updateTodo(id, todo, isDone);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: Request) => {
  try {
    const id = req.url.split("todos/")[1];
    const todo = deleteTodo(id);
    return NextResponse.json({ message: "OK", todo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
