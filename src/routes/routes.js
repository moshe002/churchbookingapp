import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/homePage'
import Booking from '../pages/bookingPage'
import Live from '../pages/liveMassPage'
import About from '../pages/aboutUsPage'
import PageNotFound from '../pages/pageNotFound'

import Sidebar from '../components/Sidebar';

const Routing = () => {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path='/' exact element = {<Home />} />
                <Route path='/booking' element = {<Booking />} />
                <Route path='/live' element = {<Live />} />
                <Route path='/about' element = {<About />} /> 
                <Route path='*' element = {<PageNotFound />} /> 
            </Routes>
        </Router>
    )
}

export default Routing