import React, { useState } from 'react'

import Routing from '../routes/routes'
// import { Navlinks } from './Navlinks'

const Sidebar = () => {

    const [open, setOpen] = useState(true)

    return (
        <div className="flex">
            <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen bg-dark-purple relative`}>
                <img src={require('../assets/control.png')} 
                alt="sidebar_pic" 
                className={`absolute cursor-pointer rounded-full -right-3
                top-9 w-7 border-2 border-dark-purple ${!open && 'rotate-180'}`}
                onClick={() => setOpen(!open)} />   
                <div className='flex gap-x-4 items-center'>
                    <h1 className={`text-white origin-left 
                    font-medium text-xl duration-300 px-20 pt-8 ${!open && 'scale-0'}`}>
                        PrayBook
                    </h1>
                </div>
                {
                    // links should be here
                }
                
            </div>
            {
                // above is the sidebar navigation
                // below is the home page
            }
            <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
                <Routing />
            </div>
        </div>
    )
}

export default Sidebar