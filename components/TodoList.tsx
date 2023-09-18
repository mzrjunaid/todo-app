import React from 'react'
import TodoItem from './TodoItem'
import { TodoListProps } from '@/types'

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, listType }) => {
    return (
        <div className='w-full p-2 flex flex-col gap-3'>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                ))
            }

        </div>
    )
}

export default TodoList