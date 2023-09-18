import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ children, btnStyle, btnType, btnTitle, clickHandle }: CustomButtonProps) => {
    return (
        <button onClick={clickHandle} type={btnType} title={btnTitle} className={`py-2 px-2 rounded-full right-2 bg-gray-900 text-white font-poppins tracking-wider hover:shadow-lg ${btnStyle}`}>
            {children}
        </button>
    )
}

export default CustomButton