import { FC } from "react"
import ImageUpload from "../Input/ImageUpload"

type ImagesProps = {
    value: string,
    onChange: (value: string) => void
}

const Images :FC<ImagesProps>= ({value, onChange}) => {

    return (
        <div className="flex flex-col gap-8">
            <ImageUpload value={value} onChange={onChange}/>
        </div>
    )
}

export default Images