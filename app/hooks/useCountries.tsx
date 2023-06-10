'use client'
import countries from 'world-countries'

const formattedCountries = countries.map((country)=> {
    return {
        value: country.cca2,
        label: country.name.common,
        latlong: country.latlng,
        region: country.region,
        flag: country.flag
    }
})

const useCountries = () =>{
   const getAll = () => formattedCountries

   const getSelected = (value: string) => formattedCountries.find((country) => country.value === value)
    
   return {
        getAll,
        getSelected
    }
} 


export default useCountries