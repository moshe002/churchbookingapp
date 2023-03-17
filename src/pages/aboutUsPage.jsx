import Description from '../components/Aboutuspage/Description'
import Donate from '../components/Aboutuspage/Donate'
import Creator from '../components/Aboutuspage/Creator'
import Warning from '../components/Aboutuspage/Warning'

import FatPic from '../assets/formal2.jpg';
import NeriPic from '../assets/neri.jpg';


/*
    page will contain:
        description on the project 
        details on the project
        donation links to charities etc
        details on the developer
*/

function AboutUs () {
    return (
        <div id='aboutus' className="flex flex-col justify-center items-center pb-8">
            <div className="p-14 w-full text-center">
                <p className="text-2xl sm:text-5xl font-semibold">About Us</p>
                <div className='flex flex-row gap-5 justify-center items-center mt-5'>
                    <img
                        className='w-12 h-12 rounded-full border-2 border-black' 
                        src={FatPic} 
                        alt="formal_pic1" />
                    <img
                        className='w-12 h-12 rounded-full border-2 border-black'  
                        src={NeriPic} 
                        alt="formal_pic2" />
                </div>
            </div>
            <Description />
            <Donate />
            <Creator />
            <Warning />
        </div>
    )
}

export default AboutUs
