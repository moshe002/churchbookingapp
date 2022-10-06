function homePage () {
    return (
        <div className="flex flex-col justify-center items-center p-10 h-screen">
            <h2 className="text-4xl font-bold">Welcome to PrayBook!</h2>
                <p className="mt-10 w-3/4 text-center text-lg">
                    PrayBook is a church booking application, where you 
                    can book yourself personal prayers with a priest, 
                    book a mass with your preferred time and schedule, 
                    and many more. 
                </p>
            <p className="mt-5 w-3/4 text-center text-lg">
                This can make the process on handling commissioned prayers to the 
                church much more convenient. This can also automate the receiving 
                of commissioned prayers and bookings of personal mass and events. 
            </p>
            <p className="mt-24 w-3/4 text-center text-lg">
                The application features a live mass page, where you can see and visit
                live masses happening in real time. We also cater different prayer bookings
                such as: prayers for thanks giving, mass booking for an upcoming wedding and 
                much more.
            </p>
            <h1 className="mt-14">Contacts and details are found in our  
            <a href="/about" 
            className="hover:text-blue-600 hover:underline underline-offset-4"> About Us Page</a>
            .
            </h1>
        </div>
    )
}

export default homePage
