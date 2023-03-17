import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { collection, addDoc } from 'firebase/firestore'

import SubmitButtonForm from '../../SubmitButtonForm'
import { db } from '../../../firebase/firebase'

const BaptismalForm = () => {

     // used for validation
     const schema = yup.object().shape({
        NameOfChild: yup.string(),
        BirthdateOfChild: yup.string(),
        BirthplaceOfChild: yup.string(),
        AgeOfChild: yup.string(),
        NameOfFather: yup.string(),
        NameOfMother: yup.string(),
        AddressOfParents: yup.string(),
        ContactNumberOfParents: yup.number().positive().integer(),
        NumberOfParticipants: yup.number().positive().integer().min(1).max(99),
        ScheduleDay: yup.string(),
        ScheduleTime: yup.string()
    })

    // formState: {errors} (to display the errors https://www.youtube.com/watch?v=wlltgs5jmZw&t=36s (22:30))
    // react-hook-form
    const {register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    })

    const userCollectionRef = collection(db, "baptismal")

    const submit = async (data) => {
        await addDoc(userCollectionRef, data)
        alert("Form has been submitted, thank you!")
    }

    return (
        <div className="flex flex-col p-0 md:p-10 text-center">
            <form onSubmit={handleSubmit(submit)}>
                {/* ---------------------------------------- */}
                <div className="flex flex-col gap-4 md:border-2 py-10 md:p-10 mb-5 bg-gray-300 rounded-md">
                    <h1 className="text-lg font-semibold text-center pb-10">Child Details:</h1>
                    <label htmlFor='NameOfChild' className='flex justify-start font-semibold'>
                        Complete Name of the Child:                        
                    </label>
                    <input className="w-full rounded-md" 
                        type="text" 
                        id='NameOfChild'
                        required 
                        placeholder="Ex. Jon Something Something"
                        {...register("NameOfChild")}/>
                    <label htmlFor='BirthdateOfChild' className='flex justify-start font-semibold'>
                        Birthdate of Child:
                    </label>
                    <input className="w-full rounded-md" 
                        type="date" 
                        id='BirthdateOfChild'
                        required
                        {...register("BirthdateOfChild")}/>
                    <label htmlFor='BirthplaceOfChild' className='flex justify-start font-semibold'>
                        Birthplace of Child:
                    </label>
                    <input className="w-full rounded-md" 
                        type="text" 
                        id='BirthplaceOfChild'
                        required 
                        placeholder="Ex. Cebu City"
                        {...register("BirthplaceOfChild")}/>
                    <label htmlFor='AgeOfChild' className='flex justify-start font-semibold'>
                        Age of Child:
                    </label>
                    <input className="w-full rounded-md" 
                        type="text" 
                        id='AgeOfChild'
                        required 
                        placeholder="Ex. 2 months or 2 yo"
                        {...register("AgeOfChild")}/>
                </div>
                {/* ---------------------------------------- */}
                <div className="flex flex-col gap-4 md:border-2 py-10 md:p-10 mb-5 bg-gray-300 rounded-md">
                    <h1 className="text-lg font-semibold text-center pb-10">Details of the Parents:</h1>
                    <label htmlFor='NameOfFather' className='flex justify-start font-semibold'>
                        Name of Father:
                    </label>
                    <input className="w-full rounded-md" 
                        type="text" 
                        id='NameOfFather'
                        required 
                        placeholder="Ex. John Cena"
                        {...register("NameOfFather")}/>
                    <label htmlFor='NameOfMother' className='flex justify-start font-semibold'>
                        Name of Mother:
                    </label>
                    <input className="w-full rounded-md" 
                        type="text" 
                        id='NameOfMother'
                        required 
                        placeholder="Ex. Jenna Cena"
                        {...register("NameOfMother")}/>
                    <label htmlFor='AddressOfParents' className='flex justify-start font-semibold'>
                        Complete Home Address of the Parents:
                    </label>
                    <input className="w-full rounded-md" 
                        type="text" 
                        id='AddressOfParents'
                        required 
                        placeholder="Ex. Didto sa kuan"
                        {...register("AddressOfParents")}/>
                    <label htmlFor='ContactNumberOfParents' className='flex justify-start font-semibold'>
                        Contact Number of the Parents:
                    </label>
                    <input className="w-full rounded-md" 
                        type="number" 
                        id='ContactNumberOfParents'
                        required 
                        placeholder="0999 999 9999" 
                        {...register("ContactNumberOfParents")}/>
                </div>
                {/* ---------------------------------------- */}
                <div className="flex flex-col gap-4 md:border-2 py-10 md:p-10 mb-5 bg-gray-300 rounded-md">
                    <h1 className="text-lg font-semibold text-center pb-10">Other Details:</h1>
                    <label htmlFor='NumberOfParticipants' className='flex justify-start font-semibold'>
                        Number of Participants:
                    </label>
                    <input className="w-full rounded-md" 
                        type="number" 
                        id='NumberOfParticipants'
                        required 
                        placeholder="Ex. 50"
                        {...register("NumberOfParticipants")}/>
                    <label htmlFor='ScheduleDay' className='flex justify-start font-semibold'>
                        Schedule (Day):
                    </label>
                    <input className="w-full rounded-md" 
                        type="date" 
                        id='ScheduleDay'
                        required
                        {...register("ScheduleDay")}/>
                    <label htmlFor='ScheduleTime' className='flex justify-start font-semibold'>
                        Schedule (Time):
                    </label>
                    <input className="w-full rounded-md" 
                        type="time" 
                        id='ScheduleTime'
                        required
                        {...register("ScheduleTime")}/>
                </div>
                <SubmitButtonForm /> 
            </form>
        </div>
    )
}

export default BaptismalForm