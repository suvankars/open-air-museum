import { FC } from "react"

type PriceProps = {
    price: number,
    onChange: (value: number)=> void
}
const Price :FC<PriceProps> = ({price, onChange}) => {
    return (
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set a price for your exhibition </label>
            <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
            type="number"
            required 
            value={price}
            onChange={(e)=> onChange(e.target.valueAsNumber)}
            >
            </input>
        </div>
    )
}

export default Price