'use client'

import useListingModal from "@/app/hooks/useListingModal"
import Modal from "./Modal"
import { useMemo, useState } from "react"
import { categories } from "@/app/utils/categories"
import CategoryInput from "../Input/categoryInput"
import { FieldValues, useForm } from "react-hook-form"
import Location from "./Location"
import Info from "./Info"
import Price from "./Price"
import Description from "./Description"
import Images from "./Images"
import ThankYou from "./ThankYou" 
import { CountryValue } from "@/app/type"

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
    THANKYOU=6
}

const ListingModal = () => {
    const listingModal = useListingModal()
    const [step, setStep] = useState(STEPS.CATEGORY)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            activities: '',
            guestCount: 1,
            info: '',
            imageSrc: '',
            price: 0,
            title: '',
            description: ''
        }
    })

    const category = watch('category')
    const location = watch('location')

    const onBack = () => {
        setStep((value) => value - 1)
    }

    const onNext = () => {
        console.log("onNext1", step)
        setStep((value) => value + 1)
        
        console.log("onNext2", step)
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Submit'
        }

        if (step ===STEPS.THANKYOU) {
            return undefined
        }

        return "Next"
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        console.log("seconderay ", step)
        if ((step === STEPS.CATEGORY || step === STEPS.THANKYOU)) {
            return undefined
        } else {
            return "Previous"
        }

    
    }, [step])

    const setCustomValue = (id: string, value: string) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldValidate: true,
            shouldTouch: true
        })
    }

    let bodyContent = <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Which describe your property best?</h3>
        <p>Choose one of the category</p>
        <div className="grid grid-cols-2 md:grid-col-2 sm:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto ">
            {categories.map((item) => {

                return (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput
                            label={item.label}
                            icon={item.icon}
                            selected={category === item.label}
                            onClickCB={(category) => setCustomValue('category', category)}
                        />
                    </div>
                )
            })}
        </div>
    </div>

    switch (step) {
        case STEPS.CATEGORY:
            bodyContent
            break;
        case STEPS.LOCATION:
            bodyContent = <Location  value={location} onChangeCountry={ (location: CountryValue)=> setCustomValue('location', location)}/>
            break;
        case STEPS.INFO:
            bodyContent = <Info />
            break;
        case STEPS.IMAGES:
            bodyContent = <Images/>
            break;
        case STEPS.DESCRIPTION:
            bodyContent = <Description/>
            break;
        case STEPS.PRICE:
            bodyContent = <Price/>
            break;
        default:
            bodyContent = <ThankYou/>
            break;
    }

    const handleOnClose =()=>{
        listingModal.onClose()
        setStep(0)
    }
   

    return (
        <Modal
            onClose={handleOnClose}
            onSubmit={onNext}
            isOpen={listingModal.isOpen}
            title="Airbnb your home!"
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={onBack}
            body={bodyContent} />
    )
}

export default ListingModal