import { FC } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type CounterProps = {
    title: String,
    subtitle: String,
    count: number,
    onChange: (count: number) => void
}

const Counter: FC<CounterProps> = ({ title, subtitle, count, onChange }) => {
    const onIncrease = () => {
        onChange(count + 1)
    }

    const onReduce = () => {
        count > 0 && onChange(count - 1)
    }
    return (
        <div className="flex flex-row item-center justify-between border-b-2 border-indigo-500 p-2">
            <div >
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className="flex flex-row gap-4">
                <div className="w-10 h-10 rounded-full border-1px border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer " onClick={onReduce}>
                    <AiOutlineMinus />
                </div>
                <div>{count.toString()}</div>
                <div className="w-10 h-10 rounded-full border-1px border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer" onClick={onIncrease}>
                    <AiOutlinePlus />
                </div>
            </div>
        </div>
    )
}

export default Counter