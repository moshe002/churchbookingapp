import React, { useState, useEffect } from 'react'

import { BiMenu } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
 
import Logo from '../assets/favicon-9.png'

function Header() {

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    if(window.innerWidth < 640)
      setIsMobile(true)
    else 
      setIsMobile(false)
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
    //console.log(!isOpen)
  };

  return (
    <>
      <div className='flex flex-row justify-between p-5'>
        <div className='flex gap-5 items-center'>
          <img
            className='w-6 h-6 sm:w-12 sm:h-12' 
            src={Logo} 
            alt="praybook-logo" 
          />
          <h1 className='text-base sm:text-2xl font-bold'>Praybook</h1>
        </div>
        <div className='flex flex-row gap-7 font-semibold text-lg'>
          {
            isMobile 
            ?
            <Hamburger isOpen={isOpen} handleClick={handleClick} />
            :
            <>
              <button className='hover:underline'>Home</button>
              <button className='hover:underline'>Booking</button>
              <button className='hover:underline'>Mass</button>
              <button className='hover:underline'>About</button>
            </> 
          }
        </div>
      </div>
        {
          <Nav isOpen={isOpen} />
        }
    </>
  )
};

const Hamburger = ({ isOpen, handleClick }) => {
  return(
    <div className='flex items-center'>
      <button 
        onClick={handleClick}
        className='text-2xl p-1 rounded-md focus:bg-gray-400'>
          {
            isOpen 
            ? 
              <BiX />
            :
              <BiMenu />
          }
      </button>
    </div>
  )
};

const Nav = ({ isOpen }) => {
  return(
    <>
      {
        isOpen
        ?
        <>
          <div className='flex flex-col justify-center w-full gap-2 p-2 z-10'>
            <button className='font-semibold p-1 hover:bg-gray-400 hover:text-white duration-100'>Home</button>
            <button className='font-semibold p-1 hover:bg-gray-400 hover:text-white duration-100'>Booking</button>
            <button className='font-semibold p-1 hover:bg-gray-400 hover:text-white duration-100'>Mass</button>
            <button className='font-semibold p-1 hover:bg-gray-400 hover:text-white duration-100'>About</button>
          </div>
        </>
        :
        <div></div>
      }
    </> 
  )
};

export default Header

// top navbar (follow figma designs)
// onclick of links, the user will be automatically scrolled on section of page
// like the albertos menu page