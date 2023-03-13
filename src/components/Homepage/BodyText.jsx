const BodyText = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center text-center p-10">
            <p className="w-3/5 text-center text-sm sm:text-lg">
                <b>PrayBook</b> is a <i>church booking application</i>, where you 
                can book yourself personal prayers with a priest, 
                book a mass with your preferred time and schedule, 
                and many more. 
            </p>
            <p className="mt-5 w-3/5 text-center text-sm sm:text-lg">
                This can make the process on handling commissioned prayers to the 
                church much more convenient. This can also automate the receiving 
                of commissioned prayers and bookings of personal mass and events. 
            </p>
            <p className="mt-10 w-3/5 text-center text-sm sm:text-lg">
                The application features a live mass page, where you can see and visit
                live masses happening in real time. We also cater different prayer bookings
                such as: prayers for thanks giving, mass booking for an upcoming wedding and 
                much more.
            </p>
        </div>
    )
};

export default BodyText