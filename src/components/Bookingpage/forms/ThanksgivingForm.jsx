/*
    name of the sender (who sent/commisioned the prayer)
    reason for thanksgiving prayer
    home address of the sender
    contact details of the sender (phone number)
*/
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { collection, addDoc } from 'firebase/firestore'

import SubmitButtonForm from '../../SubmitButtonForm'
import { db } from '../../../firebase/firebase'

const ThanksgivingForm = () => {

    const schema = yup.object().shape({
        SenderName: yup.string(),
        PrayerReason: yup.string(),
        SenderAddress: yup.string(),
        ContactNumber: yup.number().positive().integer()
    })

    // formState: {errors} (to display the errors https://www.youtube.com/watch?v=wlltgs5jmZw&t=36s (22:30))
    // react-hook-form
    const {register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    })

    const userCollectionRef = collection(db, "thanksgiving")

    const submit = async (data) => {
        await addDoc(userCollectionRef, data)
        alert("Form has been submitted, thank you!")
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit(submit)}>
                <div className="form-divs">
                    <h1 className="form-h1-divs">Form Details:</h1>
                    <label htmlFor='SenderName' className='flex justify-start font-semibold' >
                        Name of the sender:
                    </label>
                    <input className="form-text" 
                        type="text" 
                        required 
                        id='SenderName'
                        placeholder="Ex. Rodrigo Duterts"
                        {...register("SenderName")}/>
                    <label htmlFor='PrayerReason' className='flex justify-start font-semibold' >
                        Reason for Thanksgiving Prayer:
                    </label>
                    <textarea className="form-text" 
                        type="text" 
                        required 
                        id='PrayerReason'
                        placeholder="Ex. I passed the Engineering Exam"
                        {...register("PrayerReason")}/>
                    <label htmlFor='SenderAddress' className='flex justify-start font-semibold' >
                        Complete Home Address of the sender:
                    </label>
                    <input className="form-text" 
                        type="text" 
                        required 
                        id='SenderAddress'
                        placeholder="Ex. Luray, Toledo City"
                        {...register("SenderAddress")}/>
                    <label htmlFor='ContactNumber' className='flex justify-start font-semibold' >
                        Contact Number of the sender:
                    </label>
                    <input className="form-date-time-phoneNumber" 
                        type="text" 
                        required 
                        id='ContactNumber'
                        placeholder="099 9999 9999"
                        {...register("ContactNumber")}/>
                </div>
                <SubmitButtonForm />
            </form>
        </div>
    )
}

export default ThanksgivingForm