import { FC } from "react"

type DescriptionProps = {
    value: String,
    onChange: (value: String) => void
}
const Description:FC<DescriptionProps> = ({value, onChange}) => {
    return (
        <div>
            <input className="peer w-full p-4 pt-6  font-light   bg-white  border-2 rounded-md outline-none transition"
            value={value as string}
            onChange={(e)=> onChange(e.target.value)}
            >
            
            </input>
            <label className="">
                Enter a short description of your place
            </label>
        </div>
    )
}

export default Description