'use client'

import useCountries from "@/app/hooks/useCountries"
import { CountryValue } from "@/app/type"
import { FC } from "react"
import Select from 'react-select'


interface CountrySelectProps {
    value: CountryValue,
    onChangeCountry: (value: CountryValue )=> void
}

const countrySelect :FC<CountrySelectProps>= ({value, onChangeCountry}) => {
    const { getAll, getSelected } = useCountries()
    const formatOptionLabel = (option: CountryValue) => {
        return (
            <div className="flex flex-row item-center gap-3">
                <div>{option.flag}</div>
                <div>{option.label}
                    <span className="text-neutral-500 ml-1">
                        {option.region}
                    </span>
                </div>
            </div>
        )
    }
    return (<div>
        <Select 
        placeholder="Anywhere" 
        options={getAll()}
        value={value}
        onChange={(value)=>onChangeCountry(value as CountryValue)}
        formatOptionLabel={formatOptionLabel}
        theme={(theme) =>({
            ...theme,
            borderRadius: 6,
            colors: {
                ...theme.colors,
                primary: 'black',
                primary25: '#ffe4e6'
            }
        })}
        />
    </div>
    )
}

export default countrySelect