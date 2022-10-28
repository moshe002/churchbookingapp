import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const BaptismalForm = () => {

     // used for validation
     const schema = yup.object().shape({
        NameOfChild: yup.string(),
        BirthdateOfChild: yup.date(),
        BirthplaceOfChild: yup.string(),
        AgeOfChild: yup.string(),
        NameOfFather: yup.string(),
        NameOfMother: yup.string(),
        AddressOfParents: yup.string(),
        ContactNumberOfParents: yup.number().positive().integer(),
        NumberOfParticipants: yup.number().positive().integer().min(1).max(99),
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

    return (
        <div className="ml-16 p-10 text-center">
            <form onSubmit={handleSubmit(submit)}>
                {/* ---------------------------------------- */}
                <div className="grid grid-cols-3 gap-4 border-2 p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Child Details:</h1>
                    <label>
                        Complete Name of the Child:
                        <input className="w-60 ml-2" 
                        type="text" required 
                        placeholder="Jon Something Something"
                        {...register("NameOfChild")}/>
                    </label>
                    <label>
                        Birthdate of Child:
                        <input className="w-40 ml-2" 
                        type="date" 
                        required
                        {...register("BirthdateOfChild")}/>
                    </label>
                    <label>
                        Birthplace of Child:
                        <input className="w-60 ml-2" 
                        type="text" 
                        required 
                        placeholder="Ex. Cebu City"
                        {...register("BirthplaceOfChild")}/>
                    </label>
                    <label>
                        Age of Child:
                        <input className="w-28 ml-2" 
                        type="number" 
                        required 
                        placeholder="Ex. 2 months or 2 yo"
                        {...register("AgeOfChild")}/>
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="grid grid-cols-3 gap-4 border-2 p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Details of the Parents:</h1>
                    <label>
                        Name of Father:
                        <input className="w-60 ml-2" 
                        type="text" 
                        required 
                        placeholder="Ex. John Cena"
                        {...register("NameOfFather")}/>
                    </label>
                    <label>
                        Name of Mother:
                        <input className="w-60 ml-2" 
                        type="text" 
                        required 
                        placeholder="Ex. Jenna Cena"
                        {...register("NameOfMother")}/>
                    </label>
                    <label>
                        Complete Home Address of the Parents:
                        <input className="w-60 ml-2" 
                        type="text" 
                        required 
                        placeholder="Ex. Didto sa kuan"
                        {...register("AddressOfParents")}/>
                    </label>
                    <label>
                        Contact Number of the Parents:
                        <input className="w-40 ml-2" 
                        type="number" 
                        required 
                        placeholder="099 9999 9999" 
                        {...register("ContactNumberOfParents")}/>
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="grid grid-cols-3 gap-4 border-2 p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Other Details:</h1>
                    <label>
                        Number of Participants:
                        <input className="w-40 ml-2" 
                        type="number" 
                        required 
                        placeholder="Ex. 50"
                        {...register("NumberOfParticipants")}/>
                    </label>
                    <label>
                        Schedule (Day):
                        <input className="w-40 ml-2" 
                        type="date" 
                        required
                        {...register("ScheduleDay")}/>
                    </label>
                    <label>
                        Schedule (Time):
                        <input className="w-40 ml-2" 
                        type="time" 
                        required
                        {...register("ScheduleTime")}/>
                    </label>
                </div>
                <input 
                className="hover:cursor-pointer hover:bg-blue-500 bg-blue-400 text-white p-5 w-40 rounded-lg text-lg font-semibold duration-200" 
                type="submit" 
                placeholder="Submit"/>
            </form>
        </div>
    )
}

export default BaptismalForm