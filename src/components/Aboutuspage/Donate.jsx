const Donate = () => {
    return (
        <div className="mt-14 w-full text-center pl-7 sm:pl-5 py-10 border-t-4 border-b-4">
            <p className="text-xl sm:text-4xl font-semibold">Donate to charity:</p>
            <div className="mt-10">
                <div className="font-semibold text-lg">
                    <p>Children's Shelter of Cebu:</p>
                    <a 
                    className="text-blue-400 hover:text-blue-700 hover:underline duration-150"
                    href="https://cebushelter.org/"
                    target='_blank' 
                    rel="noreferrer">cebushelter.org</a>
                </div>
                <div className="font-semibold text-lg mt-5">
                    <p>Agape Charity Events:</p>
                    <a 
                    className="text-blue-400 hover:text-blue-700 hover:underline duration-150"
                    href="https://agapecharityevents.org/"
                    target='_blank' 
                    rel="noreferrer">agapecharityevents.org</a>
                </div>
            </div>
        </div>
    )
}

export default Donate