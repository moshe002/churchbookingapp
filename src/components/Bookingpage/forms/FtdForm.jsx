/*
    complete name of the deceased
    cause of death
    age of the deceased 
    home address of the deceased 
    location on where to bury

    number of participants 
    contact details of the family (phone number)
    date and schedule for the mass (day and time)
*/
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { collection, addDoc } from 'firebase/firestore'

import SubmitButtonForm from '../../SubmitButtonForm'
import { db } from '../../../firebase/firebase'

const FtdForm = () => {

    const schema = yup.object().shape({
        NameOfDeceased: yup.string(),
        CauseOfDeath: yup.string(),
        AgeOfDeceased: yup.number().positive().integer().max(999).min(1),
        AddressOfDeceased: yup.string(),
        BurialLocation: yup.string(),
        NumberOfParticipants: yup.number().positive().integer().max(999).min(1),
        FamilyContactNumber: yup.number().positive().integer(),
        ScheduleDay: yup.string(),
        ScheduleTime: yup.string()
    })

    // formState: {errors} (to display the errors https://www.youtube.com/watch?v=wlltgs5jmZw&t=36s (22:30))
    // react-hook-form
    const {register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    })

    const userCollectionRef = collection(db, "forthedead")

    const submit = async (data) => {
        await addDoc(userCollectionRef, data)
        alert("Form has been submitted, thank you!")
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit(submit)}>
                {/* ---------------------------------------- */}
                <div className="form-divs">
                    <h1 className="form-h1-divs">Details of the Deceased:</h1>
                    <label htmlFor='NameOfDeceased' className='flex justify-start font-semibold' >
                        Complete Name of the Deceased:
                    </label>
                    <input className="form-text" 
                        type="text" 
                        required 
                        id='NameOfDeceased'
                        placeholder="Ex. Batman"
                        {...register("NameOfDeceased")}/>
                    <label htmlFor='CauseOfDeath' className='flex justify-start font-semibold' >
                        Cause of Death:
                    </label>
                    <input className="form-text" 
                        type="text" 
                        required 
                        id='CauseOfDeath'
                        placeholder="Ex. broke up with gf"
                        {...register("CauseOfDeath")}/>
                    <label htmlFor='AgeOfDeceased' className='flex justify-start font-semibold' >
                        Age of the Deceased:
                    </label>
                    <input className="form-smallNumber" 
                        type="number" 
                        required 
                        id='AgeOfDeceased'
                        placeholder="Ex. 40yo"
                        {...register("AgeOfDeceased")}/>
                    <label htmlFor='AddressOfDeceased' className='flex justify-start font-semibold' >
                        Home Address of the Deceased:
                    </label>
                    <input className="form-text" 
                        type="text" 
                        id='AddressOfDeceased'
                        required 
                        placeholder="Ex. didto sa"
                        {...register("AddressOfDeceased")}/>
                    <label htmlFor='BurialLocation' className='flex justify-start font-semibold' >
                        Location on where to bury:
                    </label>
                    <input className="form-text" 
                        type="text" 
                        required 
                        id='BurialLocation'
                        placeholder="Ex. didto sa"
                        {...register("BurialLocation")}/>
                </div>
                {/* ---------------------------------------- */}
                <div className="form-divs">
                    <h1 className="form-h1-divs">Other Details:</h1>
                    <label htmlFor='NumberOfParticipants' className='flex justify-start font-semibold'>
                        Number of participants:
                    </label>
                    <input className="form-smallNumber" 
                        type="text" 
                        required 
                        id='NumberOfParticipants'
                        placeholder="Ex. 50"
                        {...register("NumberOfParticipants")}/>
                    <label htmlFor='FamilyContactNumber' className='flex justify-start font-semibold' >
                        Contact Number of the Family:
                    </label>
                    <input className="form-date-time-phoneNumber" 
                        type="number" 
                        required 
                        id='FamilyContactNumber'
                        placeholder="Ex. 0912 345 6789"
                        {...register("FamilyContactNumber")}/>
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

export default FtdForm