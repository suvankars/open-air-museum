import { FC, useState } from "react"
import Counter from "../Input/counter"

type InfoProps ={
    value: number,
    onChange: (count: number)=>void,
    bathroom: number,
    onChangeBathroom: (count: number)=> void,
}

const Info :FC<InfoProps>= ({value, onChange, onChangeBathroom, bathroom }) => {

    return (
        <div className="flex flex-col gap-8">
            <h3>Add some details about your place</h3>
            <Counter
                title={"Number of guest can visit"}
                subtitle="" 
                count={value ? value : 0}
                onChange={onChange} />
            <Counter
                title={"Number of Bathroom"}
                subtitle="" 
                count={bathroom ? bathroom : 0}
                onChange={onChangeBathroom} />    
        </div>
    )
}

export default Info