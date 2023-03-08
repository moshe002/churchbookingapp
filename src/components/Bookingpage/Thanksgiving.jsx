/*
    name of the sender (who sent/commisioned the prayer)
    reason for thanksgiving prayer
    contact details of the sender (phone number)
    home address of the sender
*/
import React from 'react'
import ThanksgivingForm from './forms/ThanksgivingForm'

const Thanksgiving = () => {
    return (
        <>
            <h1 className="text-2xl font-semibold text-center">Thanksgiving Form</h1>
            <ThanksgivingForm />
        </>
    )
}

export default Thanksgiving