import React, { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'

import { Navlinks } from '../components/Navlinks'

//  import Routing from '../routes/routes'

import control from '../assets/control.png';

const Sidebar = () => {

    const [open, setOpen] = useState(false)

    let menuRef = useRef() 

    useEffect(() => { // i still need to learn more about useEffect xD
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)) { // this checks the location of the event clicked (mousedown)
                setOpen(false)
            }
        }
        
        document.addEventListener('mousedown', handler)  
        
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <div className="flex float-left relative">
            <div 
            ref={menuRef}
            className={`${open ? 'w-56 sm:w-72' : 'w-16 sm:w-20'} duration-300 h-screen bg-dark-purple fixed`}>
                <img src={control} 
                alt="sidebar_pic" 
                className={`absolute cursor-pointer rounded-full -right-4
                top-9 w-10 border-2 border-dark-purple ${!open && 'rotate-180'}`}
                onClick={() => setOpen(!open)} />   
                <div className='flex gap-x-4 items-center'>
                    <h1 className={`text-white origin-left 
                    font-semibold text-2xl duration-300 px-14 sm:px-20 pt-8 ${!open && 'scale-0'}`}>
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