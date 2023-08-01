'use client'
import axios from "axios"
import { useEffect } from "react"

export default function Home() {

  useEffect(() => {
    axios.get('/api/museums').then((data) => {
      console.log(data)
    })
  }, [])
  return (
    <div className='text-rose-500 text-2xl pt-10'> Open Air Museum</div>
  )
}