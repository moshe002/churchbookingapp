import { Link } from 'react-router-dom'

export const Navlinks = (props) => {
    return (
        <div className='flex flex-col gap-10 mt-40 sm:mt-20
         text-white pl-10 text-xl'>
            <div className='flex flex-row'>
                <div className={`h-11 pt-4 ${props.open ? 'pr-5' : '-ml-5 sm:-ml-3'} border-b-0 ${props.open ? 'hover:border-b-0' : 'hover:border-b-2'} duration-150`}> 
                    <a 
                    title='Home Page'
                    href={`${!props.open && '/'}`} 
                    className={`${props.open ? 'cursor-default' : 'cursor-pointer'} ${props.open ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </a>  
                </div>
                <div className={` hover:bg-slate-400 p-3 w-32 text-center text-base sm:text-xl rounded-md duration-200 ${!props.open && 'scale-0'}`}>
                    <Link to='/' title='Home Page'> Home </Link>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className={`h-11 pt-4 ${props.open ? 'pr-5' : '-ml-5 sm:-ml-3'} border-b-0 ${props.open ? 'hover:border-b-0' : 'hover:border-b-2'} duration-150`}>
                    <a 
                    title='Booking Page'
                    href={`${!props.open && '/booking'}`} 
                    className={`${props.open ? 'cursor-default' : 'cursor-pointer'} ${props.open ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                    </a>
                </div>
                <div className={` hover:bg-slate-400 p-3 w-32 text-center text-base sm:text-xl rounded-md duration-200 ${!props.open && 'scale-0'}`}>
                    <Link to='/booking' title='Booking Page'> Book </Link>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className={`h-11 pt-4 ${props.open ? 'pr-5' : '-ml-5 sm:-ml-3'} border-b-0 ${props.open ? 'hover:border-b-0' : 'hover:border-b-2'} duration-150`}>
                    <a 
                    title='Live Mass Page'
                    href={`${!props.open && '/live'}`} 
                    className={`${props.open ? 'cursor-default' : 'cursor-pointer'} ${props.open ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </a>
                </div>
                <div className={` hover:bg-slate-400 p-3 w-32 text-center text-base sm:text-xl rounded-md duration-200 ${!props.open && 'scale-0'}`}>
                    <Link to='/live' title='Live Mass Page'> Live Mass </Link>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className={`h-11 pt-4 ${props.open ? 'pr-5' : '-ml-5 sm:-ml-3'} border-b-0 ${props.open ? 'hover:border-b-0' : 'hover:border-b-2'} duration-150`}>
                    <a 
                    title='About Us Page'
                    href={`${!props.open && '/about'}`} 
                    className={`${props.open ? 'cursor-default' : 'cursor-pointer'} ${props.open ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                    </a>
                </div>
                <div className={` hover:bg-slate-400 p-3 w-32 text-center text-base sm:text-xl rounded-md duration-200 ${!props.open && 'scale-0'}`}>
                    <Link to='/about' title='About Us Page'> About Us </Link>
                </div>
            </div>
        </div>
    )
}