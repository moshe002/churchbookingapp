import { Link } from 'react-router-dom'

export const Navlinks = () => {
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='/booking'> Book </Link>
            <Link to='/live'> Live Masses </Link>
            <Link to='/about'> About Us </Link>
        </div>
    )
}