"use client"

import React, { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import CustomButton from './CustomButton'
import { TodoInputProps } from '@/types'

const TodoInput: React.FC<TodoInputProps> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div className="flex-1 flex justify-center gap-3">
            <form className="rounded-full flex flex-row gap-2 focus:border-blue-700 relative items-center"
                onSubmit={
                    (e) => {
                        handleAdd(e);
                        inputRef.current?.blur();
                    }
                }
            >
                <input
                    type="text"
                    title='Add Todo'
                    placeholder="Enter a task"
                    className="input__field"
                    ref={inputRef}
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }}
                />
                <CustomButton btnStyle='absolute' btnTitle='Add' btnType="submit">
                    <FaCheck size={18} />
                </CustomButton>
            </form>
        </div>
    )
}

export default TodoInput