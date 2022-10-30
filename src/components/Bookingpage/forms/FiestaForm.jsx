/*
    location of the event (asa ang pista)
    location of chapel
    Chapel devotee (kinsa ang gi devote sa chapel)
    contact number of the sender (phone number of the sender)

    number of participants 
    date and schedule (day and time)
*/
import React from 'react' 
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { collection, addDoc } from 'firebase/firestore'

import SubmitButtonForm from '../../SubmitButtonForm'
import { db } from '../../../firebase/firebase'

const FiestaForm = () => {

    const schema = yup.object().shape({
        EventLocation: yup.string(),
        ChapelLocation: yup.string(),
        ChapelDevotee: yup.string(),
        ContactNumber: yup.number().positive().integer(),
        NumberOfParticipants: yup.number().positive().integer().min(1).max(999),
        ScheduleDay: yup.string(),
        ScheduleTime: yup.string()
    })

    // formState: {errors} (to display the errors https://www.youtube.com/watch?v=wlltgs5jmZw&t=36s (22:30))
    // react-hook-form
    const {register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    })

    const userCollectionRef = collection(db, "fiesta")

    const submit = async (data) => {
        await addDoc(userCollectionRef, data)
        alert("Form has been submitted, thank you!")
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit(submit)}>
                {/* ---------------------------------------- */}
                <div className="form-divs">
                    <h1 className="form-h1-divs">Event Details:</h1>
                    <label>
                        Location of the Event:
                        <input className="form-text" 
                        type="text" 
                        required 
                        placeholder='Ex. Cebu City'
                        {...register("EventLocation")}/>
                    </label>
                    <label>
                        Location of the Chapel:
                        <input className="form-text" 
                        type="text" 
                        required 
                        placeholder='Ex. near basketball court'
                        {...register("ChapelLocation")}/>
                    </label>
                    <label>
                        Chapel Devotee:
                        <input className="form-text" 
                        type="text" 
                        required 
                        placeholder='Ex. Mother Mary of Fatima'
                        {...register("ChapelDevotee")}/>
                    </label>
                    <label>
                        Contact Number:
                        <input className="form-date-time-phoneNumber" 
                        type="number" 
                        required 
                        placeholder='099 9999 9999'
                        {...register("ContactNumber")}/>
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="form-divs">
                    <h1 className="form-h1-divs">Other Details:</h1>
                    <label>
                        Number of Participants:
                        <input className="form-smallNumber" 
                        type="text" 
                        required 
                        placeholder='Ex. 50'
                        {...register("NumberOfParticipants")}/>
                    </label>
                    <label>
                        Schedule (Day):
                        <input className="form-date-time-phoneNumber" 
                        type="date" 
                        required 
                        {...register("ScheduleDay")}/>
                    </label>
                    <label>
                        Schedule (Time):
                        <input className="form-date-time-phoneNumber" 
                        type="time"
                        required 
                        {...register("ScheduleTime")}/>
                    </label>
                </div>
                <SubmitButtonForm />
            </form>
        </div>
    )
}

export default FiestaForm