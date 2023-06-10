import { FC } from "react"

import CountrySelect from "../Input/countrySelect"
import { CountryValue } from "@/app/type"

interface LocationProps {
    value: CountryValue,
    onChangeCountry: (location: CountryValue) => void
}
const Location: FC<LocationProps> = ({value, onChangeCountry})=>{
    
    return (
        <div>
            <h3>Please let user know where your property located</h3>
            <p> Select your country </p>
            <CountrySelect value={value} onChangeCountry={onChangeCountry}/>
        </div>
    )
}

export default Location