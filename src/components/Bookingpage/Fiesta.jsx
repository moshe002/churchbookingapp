/*
    location of the event (asa ang pista)
    location of chapel
    Chapel devotee (kinsa ang gi devote sa chapel)
    contact details of the sender (phone number of the sender)

    number of participants 
    name of sponsors
    date and schedule (day and time)
*/
import React from 'react'
import FiestaForm from './forms/FiestaForm'

const Fiesta = () => {
    return (
        <>
            <h1 className="text-2xl font-semibold text-center pl-7 md:pl-3">Fiesta Form</h1>
            <FiestaForm />
        </>
    )
}

export default Fiesta