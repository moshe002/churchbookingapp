
/*
    page will have a drop down option to choose what to book
    (unsay ganahan ipa misa)    
*/
import React, { useState } from 'react'
import { Dropdown } from "flowbite-react"

import Wedding from '../components/Bookingpage/Wedding'
import Baptismal from '../components/Bookingpage/Baptismal'

function BookingPage () {

    // const choices = ['Wedding', 'Baptismal', 'Thanksgiving Prayer', 'Prayer for the dead', 'Fiesta Mass']

    const [show, setShow] = useState(false)
    // const [selectedOption, setSelectedOption] = useState(null)

    const wedding = () => {
        console.log('wedding')
        setShow(!show)
    }

    const baptismal = () => {
        console.log('baptismal')
        setShow(!show)
    }

    const thanksgiving = () => {
        console.log('thanksgiving')
        setShow(!show)
    }

    const prayerForTheDead = () => {
        console.log('prayerForTheDead')
        setShow(!show)
    }

    const fiesta = () => {
        console.log('fiesta')
        setShow(!show)
    }

    return (
        <div className="flex flex-col justify-center items-center p-10">
            <h2 className="text-5xl font-semibold">Booking Page</h2> 
            <div className="mt-20">
                <Dropdown 
                style={{ background: '#4D82DF', width: '30rem' }}
                size="lg"
                label="Choose the type of Prayer or Event you want to book">
                    <div className='w-80 font-semibold'>
                        <Dropdown.Item onClick={wedding}>
                            Wedding
                        </Dropdown.Item>
                        <Dropdown.Item onClick={baptismal}>
                            Baptismal
                        </Dropdown.Item>
                        <Dropdown.Item onClick={thanksgiving}>
                            Thanksgiving Prayer
                        </Dropdown.Item>
                        <Dropdown.Item onClick={prayerForTheDead}>
                            Prayer for the dead
                        </Dropdown.Item>
                        <Dropdown.Item onClick={fiesta}>
                            Fiesta Mass
                        </Dropdown.Item>
                    </div>
                </Dropdown>
            </div>
            <div className={`${show ? 'block' : 'hidden'}`}>
                <Wedding />
            </div>
        </div>
    )
}

export default BookingPage