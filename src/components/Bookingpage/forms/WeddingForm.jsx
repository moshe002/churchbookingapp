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
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:border-2 py-10 md:p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Details of the Newly Weds:</h1>
                    <label>
                        Complete Name of Groom:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Juan D. Cruz" 
                        type="text" 
                        {...register("NameOfGroom")} />
                    </label>
                    <label>
                        Age of Groom:
                        <input className="w-28" 
                        required 
                        placeholder="Ex. 20yo" 
                        type="number" 
                        {...register("AgeOfGroom")} />
                    </label>
                    <label>
                        Home Address of Groom:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Deca Homes Cebu City" 
                        type="text" 
                        {...register("AddressOfGroom")} />
                    </label>
                    <label>
                        Complete Name of Bride:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Maria C. Lara" 
                        type="text" 
                        {...register("NameOfBride")} />
                    </label>
                    <label>
                        Age of Bride:
                        <input className="w-28" 
                        required 
                        placeholder="Ex. 20yo" 
                        type="number" 
                        {...register("AgeOfBride")} />
                    </label>
                    <label>
                        Home Address of Bride:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Deca Homes Cebu City" 
                        type="text" 
                        {...register("AddressOfBride")} />
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:border-2 py-10 md:p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Parent's Name of the Bride and Groom:</h1>
                    <label>
                        Mother's Name of Bride:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Mama" 
                        type="text" 
                        {...register("MotherOfBride")} />
                    </label>
                    <label>
                        Father's Name of Bride:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Papa" 
                        type="text" 
                        {...register("FatherOfBride")} />
                    </label>
                    <label>
                        Home Address of Bride's Mother and Father:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Deca Homes Cebu City" 
                        type="text" 
                        {...register("AdrressOfBrideParents")} />
                    </label>
                    <label>
                        Mother's Name of Groom:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Mama" 
                        type="text" 
                        {...register("MotherOfGroom")} />
                    </label>
                    <label>
                        Father's Name of Groom:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Papa" 
                        type="text" 
                        {...register("FatherOfGroom")} />
                    </label>
                    <label>
                        Home Address of Groom's Mother and Father:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Deca Homes Cebu City" 
                        type="text" 
                        {...register("AdrressOfGroomParents")} />
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:border-2 py-10 md:p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Readers and Bearers:</h1>
                    <label>
                        Reader of the First Reading:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Maria" 
                        type="text" 
                        {...register("FirstReading")} />
                    </label>
                    <label>
                        Reader of the Second Reading:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Maria" 
                        type="text" 
                        {...register("SecondReading")} />
                    </label>
                    <label>
                        Responsorial Psalm:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Maria" 
                        type="text" 
                        {...register("ResponsorialPsalm")} />
                    </label>
                    <label>
                        Name of Ring Bearer:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Joseph" 
                        type="text" 
                        {...register("RingBearer")} />
                    </label>
                    <label>
                        Name of Money Bearer:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Joseph" 
                        type="text" 
                        {...register("MoneyBearer")} />
                    </label>
                    <label>
                        Name of Bible Bearer:
                        <input className="w-60" 
                        required 
                        placeholder="Ex. Joseph" 
                        type="text" 
                        {...register("BibleBearer")} />
                    </label>
                    <label>
                        Number of Flower Girls:
                        <input className="w-28" 
                        required 
                        placeholder="Ex. 5" 
                        type="number" 
                        {...register("FlowerGirls")} />
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:border-2 py-10 md:p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Details on the event:</h1>
                    <label>
                        Schedule (Day):
                        <input className="w-40" 
                        required 
                        type="date" 
                        {...register("ScheduleDay")}/> 
                    </label>
                    <label>
                        Schedule (Time):
                        <input className="w-40" 
                        required 
                        type="time" 
                        {...register("ScheduleTime")} /> 
                    </label>
                    <label>
                        Contact Number of the Bride and Groom:
                        <input className="w-40" 
                        required 
                        type="number" 
                        placeholder="091 2345 6789" 
                        {...register("BrideGroomPhoneNumber")} />
                    </label>
                </div>
                <SubmitButtonForm />
            </form>
        </div>
    )
}

export default WeddingForm