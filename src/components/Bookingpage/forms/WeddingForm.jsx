import React from 'react'

const WeddingForm = () => {
    return (
        <div className="ml-16 p-10 text-center">
            <form>
                <div className="grid grid-cols-3 gap-4 border-2 p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Details of the Newly Weds:</h1>
                    <label>
                        Complete Name of Groom:
                        <input className="w-60 ml-2" required placeholder="Ex. Juan D. Cruz" type="text"/>
                    </label>
                    <label>
                        Age of Groom:
                        <input className="w-28 ml-2" required placeholder="Ex. 20yo" type="number"/>
                    </label>
                    <label>
                        Home Address of Groom:
                        <input className="w-60 ml-2" required placeholder="Ex. Deca Homes Cebu City" type="text"/>
                    </label>
                    <label>
                        Complete Name of Bride:
                        <input className="w-60 ml-2" required placeholder="Ex. Maria C. Lara" type="text"/>
                    </label>
                    <label>
                        Age of Bride:
                        <input className="w-28 ml-2" required placeholder="Ex. 20yo" type="number"/>
                    </label>
                    <label>
                        Home Address of Bride:
                        <input className="w-60 ml-2" required placeholder="Ex. Deca Homes Cebu City" type="text"/>
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="grid grid-cols-3 gap-4 border-2 p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Parent's Name of the Bride and Groom:</h1>
                    <label>
                        Mother's Name of Bride:
                        <input className="w-60 ml-2" required placeholder="Ex. Mama" type="text"/>
                    </label>
                    <label>
                        Father's Name of Bride:
                        <input className="w-60 ml-2" required placeholder="Ex. Papa" type="text"/>
                    </label>
                    <label>
                        Home Address of Bride's Mother and Father:
                        <input className="w-60 ml-2" required placeholder="Ex. Deca Homes Cebu City" type="text"/>
                    </label>
                    <label>
                        Mother's Name of Groom:
                        <input className="w-60 ml-2" required placeholder="Ex. Mama" type="text"/>
                    </label>
                    <label>
                        Father's Name of Groom:
                        <input className="w-60 ml-2" required placeholder="Ex. Papa" type="text"/>
                    </label>
                    <label>
                        Home Address of Groom's Mother and Father:
                        <input className="w-60 ml-2" required placeholder="Ex. Deca Homes Cebu City" type="text"/>
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="grid grid-cols-3 gap-4 border-2 p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Readers and Bearers:</h1>
                    <label>
                        Reader of the First Reading:
                        <input className="w-60 ml-2" required placeholder="Ex. Maria" type="text"/>
                    </label>
                    <label>
                        Reader of the Second Reading:
                        <input className="w-60 ml-2" required placeholder="Ex. Maria" type="text"/>
                    </label>
                    <label>
                        Responsorial Psalm:
                        <input className="w-60 ml-2" required placeholder="Ex. Maria" type="text"/>
                    </label>
                    <label>
                        Name of Ring Bearer:
                        <input className="w-60 ml-2" required placeholder="Ex. Joseph" type="text"/>
                    </label>
                    <label>
                        Name of Money Bearer:
                        <input className="w-60 ml-2" required placeholder="Ex. Joseph" type="text"/>
                    </label>
                    <label>
                        Name of Bible Bearer:
                        <input className="w-60 ml-2" required placeholder="Ex. Joseph" type="text"/>
                    </label>
                    <label>
                        Number of Flower Girls:
                        <input className="w-28 ml-2" required placeholder="Ex. 5" type="number"/>
                    </label>
                </div>
                {/* ---------------------------------------- */}
                <div className="grid grid-cols-3 gap-4 border-2 p-10 mb-5">
                    <h1 className="text-lg font-semibold text-center pb-10">Details on the event:</h1>
                    <label>
                        Schedule (Day):
                        <input className="w-40 ml-2" required type="date"/> 
                    </label>
                    <label>
                        Schedule (Time):
                        <input className="w-40 ml-2" required type="time"/> 
                    </label>
                    <label>
                        Contact Details of the Bride and Groom (Phone Number):
                        <input className="w-40 ml-2" required type="tel" placeholder="09123456789"/>
                    </label>
                </div>
                <input 
                className="hover:cursor-pointer hover:bg-blue-500 bg-blue-400 text-white p-5 w-40 rounded-lg text-lg font-semibold duration-200" 
                type="submit" 
                placeholder="Submit"/>
            </form>
        </div>
    )
}

export default WeddingForm