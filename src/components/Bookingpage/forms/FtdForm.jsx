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

import SubmitButtonForm from '../../SubmitButtonForm'

const FtdForm = () => {

    const schema = yup.object().shape({
        NameOfDeceased: yup.string(),
        CauseOfDeath: yup.string(),
        AgeOfDeceased: yup.number().positive().integer().max(99).min(1),
        AddressOfDeceased: yup.string(),
        BurialLocation: yup.string(),
        NumberOfParticipants: yup.number().positive().integer().max(999).min(1),
        FamilyContactNumber: yup.number().positive().integer(),
        ScheduleDay: yup.date(),
        ScheduleTime: yup.string()
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
                {/* ---------------------------------------- */}
                <div className="form-divs">
                    <h1 className="form-h1-divs">Details of the Deceased:</h1>
                    <label>
                        Complete Name of the Deceased:
                        <input className="form-text" 
                        type="text" 
                        required 
                        placeholder="Ex. Batman"
                        {...register("NameOfDeceased")}/>
                    </label>
                    <label>
                        Cause of Death:
                        <input className="form-text" 
                        type="text" 
                        required 
                        placeholder="Ex. broke up with gf"
                        {...register("CauseOfDeath")}/>
                    </label>
                    <label>
                        Age of the Deceased:
                        <input className="form-smallNumber" 
                        type="number" 
                        required 
                        placeholder="Ex. 40yo"
                        {...register("AgeOfDeceased")}/>
                    </label>
                    <label>
                        Home Address of the Deceased:
                        <input className="form-text" 
                        type="text" 
                        required 
                        placeholder="Ex. didto sa"
                        {...register("AddressOfDeceased")}/>
                    </label>
                    <label>
                        Location on where to bury:
                        <input className="form-text" 
                        type="text" 
                        required 
                        placeholder="Ex. didto sa"
                        {...register("BurialLocation")}/>
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="form-divs">
                    <h1 className="form-h1-divs">Other Details:</h1>
                    <label>
                        Number of participants:
                        <input className="form-smallNumber" 
                        type="text" 
                        required 
                        placeholder="Ex. 50"
                        {...register("NumberOfParticipants")}/>
                    </label>
                    <label>
                        Contact Number of the Family:
                        <input className="form-date-time-phoneNumber" 
                        type="number" 
                        required 
                        placeholder="Ex. 0912 345 6789"
                        {...register("FamilyContactNumber")}/>
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

export default FtdForm