import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { collection, addDoc } from 'firebase/firestore'

import SubmitButtonForm from '../../SubmitButtonForm'
import { db } from '../../../firebase/firebase'
// react-hook-forms (helps you in forms in react.js)
// yup (helps in validating the forms)

const WeddingForm = () => {

    // used for validation
    const schema = yup.object().shape({
        NameOfGroom: yup.string(),
        AgeOfGroom: yup.number().positive().integer().max(99).min(18),
        AddressOfGroom: yup.string(),
        NameOfBride: yup.string(),
        AgeOfBride: yup.number().positive().integer().max(99).min(18),
        AddressOfBride: yup.string(),
        MotherOfBride: yup.string(),
        FatherOfBride: yup.string(),
        AdrressOfBrideParents: yup.string(),
        MotherOfGroom: yup.string(),
        FatherOfGroom: yup.string(),
        AdrressOfGroomParents: yup.string(),
        FirstReading: yup.string(),
        SecondReading: yup.string(),
        ResponsorialPsalm: yup.string(),
        RingBearer: yup.string(),
        MoneyBearer: yup.string(),
        BibleBearer: yup.string(),
        FlowerGirls: yup.number().positive().integer(),
        ScheduleDay: yup.string(),
        ScheduleTime: yup.string(),
        BrideGroomPhoneNumber: yup.number().positive().integer()
    })

    // formState: {errors} (to display the errors https://www.youtube.com/watch?v=wlltgs5jmZw&t=36s (22:30))
    // react-hook-form
    const {register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    })

    const userCollectionRef = collection(db, "wedding")

    const submit = async (data) => {
        await addDoc(userCollectionRef, data)
        alert("Form has been submitted, thank you!")
    }

    return (
        <div className="flex flex-col p-0 md:p-10 text-center">
            <form onSubmit={handleSubmit(submit)}>
                {/* ---------------------------------------- */}
                <div className="flex flex-col gap-4 md:border-2 py-10 md:p-10 mb-5 bg-gray-300 rounded-md">
                    <h1 className="text-lg font-semibold text-center pb-10">Details of the Newly Weds:</h1>
                    <label htmlFor='NameOfGroom' className='flex justify-start font-semibold' >
                        Complete Name of Groom:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Juan D. Cruz" 
                        type="text"
                        id='NameOfGroom' 
                        {...register("NameOfGroom")} />
                    <label htmlFor='AgeOfGroom' className='flex justify-start font-semibold' >
                        Age of Groom:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. 20yo" 
                        type="number"
                        id='AgeOfGroom' 
                        {...register("AgeOfGroom")} />
                    <label htmlFor='AddressOfGroom' className='flex justify-start font-semibold' >
                        Home Address of Groom:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Deca Homes Cebu City" 
                        type="text" 
                        id='AddressOfGroom'
                        {...register("AddressOfGroom")} />
                    <label htmlFor='NameOfBride' className='flex justify-start font-semibold' >
                        Complete Name of Bride:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Maria C. Lara" 
                        type="text" 
                        id='NameOfBride'
                        {...register("NameOfBride")} />
                    <label htmlFor='AgeOfBride' className='flex justify-start font-semibold' >
                        Age of Bride:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. 20yo" 
                        type="number" 
                        id='AgeOfBride'
                        {...register("AgeOfBride")} />
                    <label htmlFor='AddressOfBride' className='flex justify-start font-semibold' >
                        Home Address of Bride:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Deca Homes Cebu City" 
                        type="text" 
                        id='AddressOfBride'
                        {...register("AddressOfBride")} />
                </div>
                {/* ---------------------------------------- */}
                <div className="flex flex-col gap-4 md:border-2 py-10 md:p-10 mb-5 bg-gray-300 rounded-md">
                    <h1 className="text-lg font-semibold text-center pb-10">Parent's Name of the Bride and Groom:</h1>
                    <label htmlFor='MotherOfBride' className='flex justify-start font-semibold' >
                        Mother's Name of Bride:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Mama" 
                        type="text" 
                        id='MotherOfBride'
                        {...register("MotherOfBride")} />
                    <label htmlFor='FatherOfBride' className='flex justify-start font-semibold' >
                        Father's Name of Bride:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Papa" 
                        type="text" 
                        id='FatherOfBride'
                        {...register("FatherOfBride")} />
                    <label htmlFor='AdrressOfBrideParents' className='flex justify-start font-semibold' >
                        Home Address of Bride's Mother and Father:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Deca Homes Cebu City" 
                        type="text"
                        id='AdrressOfBrideParents' 
                        {...register("AdrressOfBrideParents")} />
                    <label htmlFor='MotherOfGroom' className='flex justify-start font-semibold' >
                        Mother's Name of Groom:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Mama" 
                        type="text"
                        id='MotherOfGroom' 
                        {...register("MotherOfGroom")} />
                    <label htmlFor='FatherOfGroom' className='flex justify-start font-semibold' >
                        Father's Name of Groom:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Papa" 
                        type="text" 
                        id='FatherOfGroom'
                        {...register("FatherOfGroom")} />
                    <label htmlFor='AdrressOfGroomParents' className='flex justify-start font-semibold' >
                        Home Address of Groom's Mother and Father:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Deca Homes Cebu City" 
                        type="text" 
                        id='AdrressOfGroomParents'
                        {...register("AdrressOfGroomParents")} />
                </div>
                {/* ---------------------------------------- */}
                <div className="flex flex-col gap-4 md:border-2 py-10 md:p-10 mb-5 bg-gray-300 rounded-md">
                    <h1 className="text-lg font-semibold text-center pb-10">Readers and Bearers:</h1>
                    <label htmlFor='FirstReading' className='flex justify-start font-semibold' >
                        Reader of the First Reading:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Maria" 
                        type="text" 
                        id='FirstReading'
                        {...register("FirstReading")} />
                    <label htmlFor='SecondReading' className='flex justify-start font-semibold' >
                        Reader of the Second Reading:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Maria" 
                        type="text" 
                        id='SecondReading'
                        {...register("SecondReading")} />
                    <label htmlFor='ResponsorialPsalm' className='flex justify-start font-semibold' >
                        Responsorial Psalm:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Maria" 
                        type="text" 
                        id='ResponsorialPsalm'
                        {...register("ResponsorialPsalm")} />
                    <label htmlFor='RingBearer' className='flex justify-start font-semibold' >
                        Name of Ring Bearer:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Joseph" 
                        type="text" 
                        id='RingBearer'
                        {...register("RingBearer")} />
                    <label htmlFor='MoneyBearer' className='flex justify-start font-semibold' >
                        Name of Money Bearer:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Joseph" 
                        type="text" 
                        id='MoneyBearer'
                        {...register("MoneyBearer")} />
                    <label htmlFor='BibleBearer' className='flex justify-start font-semibold' >
                        Name of Bible Bearer:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. Joseph" 
                        type="text" 
                        id='BibleBearer'
                        {...register("BibleBearer")} />
                    <label htmlFor='FlowerGirls' className='flex justify-start font-semibold' >
                        Number of Flower Girls:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        placeholder="Ex. 5" 
                        type="number" 
                        id='FlowerGirls'
                        {...register("FlowerGirls")} />
                </div>
                {/* ---------------------------------------- */}
                <div className="flex flex-col gap-4 md:border-2 py-10 md:p-10 mb-5 bg-gray-300 rounded-md">
                    <h1 className="text-lg font-semibold text-center pb-10">Details on the event:</h1>
                    <label htmlFor='ScheduleDay' className='flex justify-start font-semibold' >
                        Schedule (Day):
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        type="date" 
                        id='ScheduleDay'
                        {...register("ScheduleDay")}/> 
                    <label htmlFor='ScheduleTime' className='flex justify-start font-semibold' >
                        Schedule (Time):
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        type="time" 
                        id='ScheduleTime'
                        {...register("ScheduleTime")} /> 
                    <label htmlFor='BrideGroomPhoneNumber' className='flex justify-start font-semibold' >
                        Contact Number of the Bride and Groom:
                    </label>
                    <input className="w-full rounded-md" 
                        required 
                        type="number" 
                        id='BrideGroomPhoneNumber'
                        placeholder="091 2345 6789" 
                        {...register("BrideGroomPhoneNumber")} />
                </div>
                <SubmitButtonForm />
            </form>
        </div>
    )
}

export default WeddingForm