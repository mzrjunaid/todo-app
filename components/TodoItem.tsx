import React from 'react'
import { RiEditFill, RiDeleteBinFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import { TodoItemProps } from '@/types'
import { deleteTodo } from '@/app/api/todos'


const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {

    const handleDelete = async (id: string) => {
        await deleteTodo(id);
        // window.location.reload();
    }

    return (
        <form className='
            w-full
            lg:w-3/6
            mx-auto
            border rounded-xl bg-orange-200
            flex flex-row items-center justify-between 
            py-3 px-2
            '>
            <div>
                <span className='font-semibold font-poppins text-gray-950'>
                    {todo.todo}
                </span>
            </div>
            <div className='flex flex-row gap-3'>
                {/* <RiEditFill onClick={() => handleDone(todo.id)} cursor="pointer" />
                <FaCheck onClick={() => handleDone(todo.id)} cursor="pointer" /> */}
                <RiDeleteBinFill onClick={() => handleDelete(todo.id)} cursor="pointer" />
            </div>
        </form>
    )
}

export default TodoItem