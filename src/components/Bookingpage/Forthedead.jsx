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
import FtdForm from './forms/FtdForm'

const Forthedead = () => {
    return (
        <>
            <h1 className="text-2xl font-semibold text-center">Mass for the Dead Form</h1>
            <FtdForm />
        </>
    )
}

export default Forthedead