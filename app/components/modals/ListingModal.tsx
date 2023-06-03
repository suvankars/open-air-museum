'use client'

import useListingModal from "@/app/hooks/useListingModal"
import Modal from "./Modal"

const ListingModal = () => {
    const listingModal = useListingModal()


    return (
        <Modal
            onClose={listingModal.onClose}
            onSubmit={listingModal.onClose}
            isOpen={listingModal.isOpen}
            title="Airbnb your home!"
            actionLabel="Submit" />
    )
}

export default ListingModal