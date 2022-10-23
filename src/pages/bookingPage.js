
/*
    page will have a drop down option to choose what to book
    (unsay ganahan ipa misa)    
*/

import { Dropdown } from "flowbite-react"

function bookingPage () {
    return (
        <div className="flex flex-col justify-center items-center p-10">
            <h2 className="text-5xl font-semibold">Booking Page</h2> 
            <div className="mt-20">
            <Dropdown 
            style={{ background: '#4D82DF' }}
            size="lg"
            label="Choose the type of Prayer or Event you want to book"
            className="font-semibold w-80 text-center border-y-slate-300 border-x-slate-300">
                <Dropdown.Item>
                    Wedding
                </Dropdown.Item>
                <Dropdown.Item>
                    Baptismal
                </Dropdown.Item>
                <Dropdown.Item>
                    Thanksgiving Prayer
                </Dropdown.Item>
                <Dropdown.Item>
                    Prayer for the dead
                </Dropdown.Item>
                <Dropdown.Item>
                    Fiesta Mass
                </Dropdown.Item>
            </Dropdown>
            </div>
        </div>
    )
}

export default bookingPage