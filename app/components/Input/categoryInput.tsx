'use client'

import { IconType } from "react-icons"


interface CategoryProps {
    label: string,
    icon: IconType,
    onClickCB: (value: string) => void,
    selected: boolean
}

const CategoryInput: React.FC<CategoryProps> = ({ label, icon: Icon, onClickCB, selected }) => {
    return (
        <div className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
      `}
            onClick={() => onClickCB(label)} >
            <Icon size={30} />
            <div className="font-semibold">
                {label}
            </div>
        </div>


    )
}

export default CategoryInput

