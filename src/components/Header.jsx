import React from 'react'

import Logo from '../assets/favicon-9.png'

function Header() {
  return (
    <div className='flex flex-row justify-between p-5'>
      <div className='flex gap-5 items-center'>
        <img
          className='w-12 h-12' 
          src={Logo} 
          alt="praybook-logo" 
        />
        <h1 className='text-2xl font-bold'>Praybook</h1>
      </div>
      <div className='flex flex-row gap-7 font-semibold text-lg'>
        <button className='hover:underline'>Home</button>
        <button className='hover:underline'>Booking</button>
        <button className='hover:underline'>Mass</button>
        <button className='hover:underline'>About</button>
      </div>
    </div>
  )
}

export default Header

// top navbar (follow figma designs)
// onclick of links, the user will be automatically scrolled on section of page
// like the albertos menu page