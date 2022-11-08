import React from 'react'
import { Link } from 'react-router-dom'

const FooterText = () => {
    return (
        <h1 className="mt-16 text-center text-sm w-40 sm:w-full sm:text-lg"><b>Contacts and details</b> are found in our  
            <Link to='/about'>
                <span
                className="hover:text-blue-500 hover:underline underline-offset-4"> About Us Page</span>
            </Link>
            .
        </h1>
    )
}

export default FooterText