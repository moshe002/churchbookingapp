/*
    wedding form will need:
    names of newly weds (man and woman (ang pakaslon))
    parents name of the bride
    parents name of the groom

    readers/lectors (mo basa sa first reading, etc...)
    name of ring bearer
    name of money bearer 
    name of bible bearer
    how many flower girls and the names of the flower girls

    Date and schedule (time and day)
    estimated participants
    contact details of the bride and groom (phone numbers)
*/

import React from 'react'
import WeddingForm from "./forms/WeddingForm"

const Wedding = () => {
    return (
        <> {/* form will use react-hook-form (form not yet complete) */}
            <h1 className="text-2xl font-semibold text-center">Wedding Form</h1>
            <WeddingForm />
        </>
    )
}

export default Wedding