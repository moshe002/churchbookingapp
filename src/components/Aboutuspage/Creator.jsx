import formalPic from "../../assets/formal2.jpg";

const Creator = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center w-full mt-6 sm:mt-14 pl-7 sm:pl-0 py-10 gap-5 border-b-4">
            <img 
            className="text-center w-32 h-32 sm:w-52 sm:h-52 rounded-full border-4 border-black"
            alt="developer_pic" src={formalPic}/>
            <p className="text-sm sm:text-lg"><b>Creator:</b> Moses Anthony Y. Fat</p>
            <p className="text-sm sm:text-lg"><b>Email:</b> mosesfat@gmail.com</p>
            <p className="text-sm sm:text-lg"><b>Contact me through:</b></p>
            <div className="flex flex-row gap-5 justify-center text-base sm:text-lg items-center">
                <a 
                className="hover:text-blue-500 hover:underline underline-offset-4" 
                href="https://www.facebook.com/mosesanthony873/" target='_blank' rel="noreferrer">Facebook</a>
                <a
                className="hover:text-gray-500 hover:underline underline-offset-4" 
                href="https://github.com/moshe002" target='_blank' rel="noreferrer">Github</a>
                <a
                className="hover:text-blue-700 hover:underline underline-offset-4" 
                href="https://twitter.com/_mosheee" target='_blank' rel="noreferrer">Twitter</a>
            </div>
        </div>
    )
}

export default Creator