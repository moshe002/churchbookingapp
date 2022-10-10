import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import { Navlinks } from '../components/Navlinks'

//  import Routing from '../routes/routes'

const Sidebar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="flex float-left relative">
            <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen bg-dark-purple fixed`}>
                <img src={require('../assets/control.png')} 
                alt="sidebar_pic" 
                className={`absolute cursor-pointer rounded-full -right-4
                top-9 w-10 border-2 border-dark-purple ${!open && 'rotate-180'}`}
                onClick={() => setOpen(!open)} />   
                <div className='flex gap-x-4 items-center'>
                    <h1 className={`text-white origin-left 
                    font-semibold text-2xl duration-300 px-20 pt-8 ${!open && 'scale-0'}`}>
                        PrayBook
                    </h1>
                </div>
                {
                    // links should be here
                    <Navlinks open={open}/>
                }
                
            </div>
        </div>
    )
}

export default Sidebar