'use client'

import useListingModal from "@/app/hooks/useListingModal"
import { useCallback } from "react"

const AddProperty = () => {
    const listingModal = useListingModal()
    const onRent = useCallback(() => {
        listingModal.onOpen()
    }, [listingModal])

    return (
        <div className="text-sm font-semibold px-6"
            onClick={onRent}
        >
            Add Your Property
        </div>
    )
}

export default AddProperty