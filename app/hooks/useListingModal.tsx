import { create } from 'zustand'

interface listingModalStore {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,

}

const useListingModal = create<listingModalStore>((set) => ({
    isOpen: false,
    onOpen: () => {
        set({ isOpen: true })
    },
    onClose: () => {
        set({ isOpen: false })
    }
}))

export default useListingModal