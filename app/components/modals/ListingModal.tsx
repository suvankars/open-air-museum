'use client'

import useListingModal from "@/app/hooks/useListingModal"
import Modal from "./Modal"
import { useMemo, useState } from "react"
import { categories } from "@/app/utils/categories"
import CategoryInput from "../Input/categoryInput"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Location from "./Location"
import Info from "./Info"
import Price from "./Price"
import Description from "./Description"
import Images from "./Images"
import ThankYou from "./ThankYou"
import axios from "axios"
import { Toaster, toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import Input from "../Input/Input"

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
    THANKYOU = 6
}

const ListingModal = () => {
    const listingModal = useListingModal()
    const [step, setStep] = useState(STEPS.CATEGORY)
    const [loading, setIsLoading] = useState(false)
    const router = useRouter()

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
            guestCount: 1,
            price: 0,
            description: ''
        }
    })

    const category = watch('category')
    const location = watch('location')
    const guestCount = watch('guestCount')
    const bathroom = watch('bathroomCount')
    const images = watch('museumImages')
    const price = watch('price')


    const onBack = () => {
        setStep((value) => value - 1)
    }

    const onNext = () => {
        setStep((value) => value + 1)
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Submit'
        }

        if (step === STEPS.THANKYOU) {
            return undefined
        }

        return "Next"
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if ((step === STEPS.CATEGORY || step === STEPS.THANKYOU)) {
            return undefined
        } else {
            return "Previous"
        }


    }, [step])

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldValidate: true,
            shouldTouch: true
        })
    }

    const handleOnClose = () => {
        listingModal.onClose()
        setStep(0)
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step != STEPS.PRICE) {
            return onNext()
        }

        setIsLoading(true)
        const submitData = axios.post('/api/listings', data)
        submitData.then(() => {
            router.refresh()
            reset()
            setStep(STEPS.CATEGORY)
            listingModal.onClose()
        }).finally(() => {
            setIsLoading(false)
        })

        toast.promise(submitData, {
            loading: 'Loading',
            success: 'Listing saved successfully!',
            error: 'Error when saving!',
        });
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
            bodyContent = <Location value={location} onChangeCountry={(location) => setCustomValue('location', location)} />
            break;
        case STEPS.INFO:
            bodyContent = <Info
                value={guestCount}
                onChange={(count: number) => setCustomValue('guestCount', count)}
                bathroom={bathroom}
                onChangeBathroom={(count: number) => setCustomValue('bathroomCount', count)}
            />
            break;
        case STEPS.IMAGES:
            bodyContent = <Images
                value={images}
                onChange={(value: string) => setCustomValue('museumImages', value)}
            />
            break;
        case STEPS.DESCRIPTION:
            bodyContent = (
                <div className="flex flex-col gap-8">
                    <h3>How would you describe your place ?</h3>
                    <Input
                        id='title'
                        register={register}
                        label="Input"
                        required
                        errors={errors}

                    />
                    <hr />
                    <Input
                        id='description'
                        register={register}
                        label="Description"
                        required
                        errors={errors}
                    />
                </div>)
            break;
        case STEPS.PRICE:
            bodyContent = <Price
                price={price}
                onChange={(price: number) => setCustomValue('price', price)}
            />
            break;
        default:
            bodyContent = <ThankYou />
            break;
    }

    return (
        <div>
            <div><Toaster /></div>
            <Modal
                onClose={handleOnClose}
                onSubmit={handleSubmit(onSubmit)}
                isOpen={listingModal.isOpen}
                title="Add your place in the Open Air Museum"
                actionLabel={actionLabel}
                secondaryActionLabel={secondaryActionLabel}
                secondaryAction={onBack}
                body={bodyContent} />


        </div>
    )
}

export default ListingModal