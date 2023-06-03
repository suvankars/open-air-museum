'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()

    return (
        <Image
            className="md:block cursor-pointer"
            height="50"
            width="50"
            src="/images/logo.png"
            alt="Logo" />
    )
}


export default Logo