/*
    page will have a drop down option to choose what to book
    (unsay ganahan ipa misa)    
*/
import React, { useState } from 'react'
import { Dropdown } from "flowbite-react"

import Wedding from '../components/Bookingpage/Wedding'
import Baptismal from '../components/Bookingpage/Baptismal'
import Thanksgiving from '../components/Bookingpage/Thanksgiving'
import Forthedead from '../components/Bookingpage/Forthedead'
import Fiesta from '../components/Bookingpage/Fiesta'

function BookingPage () {

    const [showOption, setShowOption] = useState()

    return (
        <div id='bookingpage' className="flex flex-col justify-center items-center p-10">
            <h2 className="pl-7 sm:pl-0 text-2xl sm:text-5xl font-semibold">Booking Page</h2> 
            <div className="pl-10 sm:pl-0 mt-20">
                <Dropdown 
                style={{ background: '#4D82DF' }}
                size="lg"
                label="Book an Event">
                    <div className='w-40 sm:w-80 font-semibold'>
                        <Dropdown.Item
                        onClick={() => setShowOption(<Wedding />)}>
                            Wedding
                        </Dropdown.Item>
                        <Dropdown.Item
                        onClick={() => setShowOption(<Baptismal />)}>
                            Baptismal
                        </Dropdown.Item>
                        <Dropdown.Item
                        onClick={() => setShowOption(<Thanksgiving />)}>
                            Thanksgiving Prayer
                        </Dropdown.Item>
                        <Dropdown.Item 
                        onClick={() => setShowOption(<Forthedead />)}>
                            Mass for the dead
                        </Dropdown.Item>
                        <Dropdown.Item
                        onClick={() => setShowOption(<Fiesta />)}>
                            Fiesta Mass
                        </Dropdown.Item>
                    </div>
                </Dropdown>
            </div>
            <div className='mt-20'>
                {
                    showOption
                }
            </div>
        </div>
    )
}

export default BookingPage