import React, { useState } from 'react';

import { BiArrowToRight } from "react-icons/bi";
import { BiArrowToLeft } from "react-icons/bi";

import BasilicaStoNino from '../../assets/church pics/basilica-minore-del-santo-nino-cebu.jpg';
import BinondoChurch from '../../assets/church pics/binondo-church.jpg';
import CaleruegaChurch from '../../assets/church pics/caleruega-church.jpg';
import BarasoainChurch from '../../assets/church pics/facade-of-barasoain-church.jpg';
import DaragaChurch from '../../assets/church pics/facade-of-daraga-church.jpg';

function Slider() {

    const images = [
        BasilicaStoNino,
        BinondoChurch,
        CaleruegaChurch,
        BarasoainChurch,
        DaragaChurch
    ];

    const churchnames = [
        "Basilica Minore Del Sto Nino (Cebu)",
        "Binondo Church (Manila)",
        "Caleruega Church (Batangas)",
        "Barasoain Church (Bulacan)",
        "Daraga Church (Albay)"
    ];

    const [image, setImage] = useState(0);
    const [churchNames, setChurchNames] = useState(0);

    const previousImage = () => {
        setImage((image - 1 + images.length) % images.length);
        setChurchNames((churchNames - 1 + churchnames.length) % churchnames.length)
    };

    const nextImage = () => {
        setImage((image + 1) % images.length);
        setChurchNames((churchNames + 1) % churchnames.length);
    };
        
    return (
        <div className='mt-10 relative'>
            <img 
                src={images[image]} 
                alt={`Image ${image + 1}`} 
                className="rounded-lg max-w-xs max-h-40 sm:max-w-5xl sm:max-h-96 shadow-3xl" 
            />  
            <h2 className='mt-5 text-center text-base sm:text-2xl font-bold'>{churchnames[churchNames]}</h2>          
            <button 
                className="absolute text-2xl top-1/2 left-18 sm:-left-5 transform -translate-y-1/2 bg-black hover:bg-gray-400 text-white px-2 py-1 rounded-l"
                onClick={previousImage}>
                    <BiArrowToLeft />
            </button>
            <button 
                className="absolute text-2xl top-1/2 right-5 sm:-right-5 transform -translate-y-1/2 bg-black hover:bg-gray-400 text-white px-2 py-1 rounded-r"
                onClick={nextImage}>
                    <BiArrowToRight />
            </button> 
            <p className='text-sm text-center mt-5 opacity-50 italic'>
                Photos from&nbsp; 
                <a 
                    className='hover:text-blue-600'
                    href='https://guidetothephilippines.ph/articles/history-culture/must-visit-philippine-churches' target='_blank'>
                    guidetothephilippines.ph
                </a>
            </p>
        </div>
  )
}

export default Slider;