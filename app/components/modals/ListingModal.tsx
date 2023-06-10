'use client'

import useListingModal from "@/app/hooks/useListingModal"
import Modal from "./Modal"
import { useMemo, useState } from "react"
import { categories } from "@/app/utils/categories"
import CategoryInput from "../Input/categoryInput"

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const ListingModal = () => {
    const listingModal = useListingModal()
    console.log("Listing Modal")
    const [step, setStep] = useState(STEPS.CATEGORY)

    const onBack = () => {
        setStep((value) => value + 1)
    }

    const onPrev = () => {
        setStep((value) => value + 1)
    }

    const actionLabel = useMemo(()=>{
        if(step=== STEPS.PRICE){
            return 'Create'
        }

        return "Submit"
    }, [step])

    const secondaryActionLabel =useMemo(()=>{
        if(step !== STEPS.CATEGORY){
            return "Previous"    
        }
        return undefined
    }, [step])

    let bodyContent = <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Which describe your property best?</h3>
        <p>Choose one of the category</p>
        <div className="grid grid-cols-2 md:grid-col-2 sm:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto ">
            {categories.map((category)=>{
               return <CategoryInput 
               label={category.label}
               icon={category.icon}
               selected={true}
               onClickCB={()=>{}}/>
            })}
        </div>
    </div>
    return (
        <Modal
            onClose={listingModal.onClose}
            onSubmit={listingModal.onClose}
            isOpen={listingModal.isOpen}
            title="Airbnb your home!"
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel} 
            secondaryAction={ onPrev }
            body={bodyContent}/>
    )
}

export default ListingModal