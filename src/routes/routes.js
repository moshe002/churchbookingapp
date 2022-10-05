import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/homePage'
import Booking from '../pages/bookingPage'
import Live from '../pages/liveMassPage'
import About from '../pages/aboutUsPage'

// import { Navlinks } from '../components/Navlinks'
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
                <Route path='*' element = {<h1>Error: Page not found</h1>} /> 
            </Routes>
        </Router>
    )
}

export default Routing