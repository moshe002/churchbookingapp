
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
        <div className="flex flex-col justify-center items-center p-10">
            <h2 className="text-5xl font-semibold">Booking Page</h2> 
            <div className="mt-20">
                <Dropdown 
                style={{ background: '#4D82DF' }}
                size="lg"
                label="Choose the type of Prayer or Event you want to book">
                    <div className='w-80 font-semibold'>
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
                            Prayer for the dead
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