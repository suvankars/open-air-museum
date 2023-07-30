'use client'

import { FC } from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
type Props = {
    label: string,
    id: string,
    type?: string,
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const Input: FC<Props> = (props) => {
    const { type = 'text', label, id, register, errors, required } = props
    return (
        <div>
            <input
                id={id}
                type={type}
                {...register(id, { required })}
                className={`
            peer
            w-full
            p-4
            pt-6 
            font-light 
            bg-white 
            border-2
            rounded-md
            outline-none
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
            ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
          `}
            />
            <label
                className={`
             absolute 
             text-md
             duration-150 
             transform 
             -translate-y-3 
             top-5 
             z-10 
             origin-[0] 
             peer-placeholder-shown:scale-100 
             peer-placeholder-shown:translate-y-0 
             peer-focus:scale-75
             peer-focus:-translate-y-4
             ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
           `}
            >

                {label}
            </label>
        </div>
    )
}

export default Input