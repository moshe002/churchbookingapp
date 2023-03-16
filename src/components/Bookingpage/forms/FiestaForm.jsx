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
                    <label htmlFor='EventLocation' className='flex justify-start font-semibold' >
                        Location of the Event:
                    </label>
                    <input className="form-text" 
                        type="text" 
                        required 
                        id='EventLocation'
                        placeholder='Ex. Cebu City'
                        {...register("EventLocation")}/>
                    <label htmlFor='ChapelLocation' className='flex justify-start font-semibold' >
                        Location of the Chapel:
                    </label>
                    <input className="form-text" 
                        type="text" 
                        required 
                        id='ChapelLocation'
                        placeholder='Ex. near basketball court'
                        {...register("ChapelLocation")}/>
                    <label htmlFor='ChapelDevotee' className='flex justify-start font-semibold' >
                        Chapel Devotee:
                    </label>
                    <input className="form-text" 
                        type="text" 
                        required 
                        id='ChapelDevotee'
                        placeholder='Ex. Mother Mary of Fatima'
                        {...register("ChapelDevotee")}/>
                    <label htmlFor='ContactNumber' className='flex justify-start font-semibold' >
                        Contact Number:
                    </label>
                    <input className="form-date-time-phoneNumber" 
                        type="number" 
                        required 
                        id='ContactNumber'
                        placeholder='099 9999 9999'
                        {...register("ContactNumber")}/>
                </div>
                {/* ---------------------------------------- */}
                <div className="form-divs">
                    <h1 className="form-h1-divs">Other Details:</h1>
                    <label htmlFor='NumberOfParticipants' className='flex justify-start font-semibold' >
                        Number of Participants:
                    </label>
                    <input className="form-smallNumber" 
                        type="text" 
                        required 
                        id='NumberOfParticipants'
                        placeholder='Ex. 50'
                        {...register("NumberOfParticipants")}/>
                    <label htmlFor='ScheduleDay' className='flex justify-start font-semibold' >
                        Schedule (Day):
                    </label>
                    <input className="form-date-time-phoneNumber" 
                        type="date" 
                        required 
                        id='ScheduleDay'
                        {...register("ScheduleDay")}/>
                    <label htmlFor='ScheduleTime' className='flex justify-start font-semibold' >
                        Schedule (Time):
                    </label>
                    <input className="form-date-time-phoneNumber" 
                        type="time"
                        required 
                        id='ScheduleTime'
                        {...register("ScheduleTime")}/>
                </div>
                <SubmitButtonForm />
            </form>
        </div>
    )
}

export default FiestaForm