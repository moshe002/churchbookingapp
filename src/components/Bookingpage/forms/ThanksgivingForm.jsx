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

import SubmitButtonForm from '../../SubmitButtonForm'

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

    const submit = (data) => {
        console.log(data)
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit(submit)}>
                <div className="form-divs">
                    <h1 className="form-h1-divs">Form Details:</h1>
                    <label>
                        Name of the sender:
                        <input className="form-text" 
                        type="text" 
                        required 
                        placeholder="Ex. Rodrigo Duterts"
                        {...register("SenderName")}/>
                    </label>
                    <label>
                        Reason for Thanksgiving Prayer:
                        <textarea className="form-text" 
                        type="text" 
                        required 
                        placeholder="Ex. I passed the Engineering Exam"
                        {...register("PrayerReason")}/>
                    </label>
                    <label>
                        Complete Home Address of the sender:
                        <input className="form-text" 
                        type="text" 
                        required 
                        placeholder="Ex. Luray, Toledo City"
                        {...register("SenderAddress")}/>
                    </label>
                    <label>
                        Contact Number of the sender:
                        <input className="form-date-time-phoneNumber" 
                        type="text" 
                        required 
                        placeholder="099 9999 9999"
                        {...register("ContactNumber")}/>
                    </label>
                </div>
                <SubmitButtonForm />
            </form>
        </div>
    )
}

export default ThanksgivingForm