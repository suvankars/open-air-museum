/* eslint-disable react/jsx-no-comment-textnodes */
import { FC } from "react"

import CountrySelect from "../Input/countrySelect"
import { CountryValue } from "@/app/type"
import dynamic from "next/dynamic"
import { useMemo } from "react"

interface LocationProps {
    value: CountryValue,
    onChangeCountry: (location: CountryValue) => void
}
const Location: FC<LocationProps> = ({ value, onChangeCountry }) => {

    const Map = dynamic(() => import('../Map'), {
        loading: () => <p>Loading...</p>,
        ssr: false,
      })

    return (
        <div>
            <h3>Please let user know where your property located</h3>
            <p> Select your country </p>
            <CountrySelect value={value} onChangeCountry={onChangeCountry} />
            <Map center={value?.latlong} />
        </div>
    )
}

export default Location