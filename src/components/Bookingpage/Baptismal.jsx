/*
    complete name of the child
    birthdate of child (dd/mm/yy)
    birthplace of child
    age of the child

    name of father 
    name of mother
    home address of the child or parents
    contact details of the parents (phone numbers)

    number of participants 
    date and schedule for the mass (day and time)
*/
import React from 'react'
import BaptismalForm from './forms/BaptismalForm'

const Baptismal = () => {
    return (
        <>        
            <h1 className="text-2xl font-semibold text-center pl-7 md:pl-3">Baptismal Form</h1>
            <BaptismalForm />
        </>
    )
}

export default Baptismal