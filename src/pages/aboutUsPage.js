import Description from '../components/Aboutuspage/Description'
import Donate from '../components/Aboutuspage/Donate'
import Creator from '../components/Aboutuspage/Creator'
import Warning from '../components/Aboutuspage/Warning'


/*
    page will contain:
        description on the project 
        details on the project
        donation links to charities etc
        details on the developer
*/

function AboutUs () {
    return (
        <div className="flex flex-col justify-center items-center pb-8">
            <div className="p-14 w-full text-center">
                <p className="text-5xl font-semibold">About Us:</p>
            </div>
            <Description />
            <Donate />
            <Creator />
            <Warning />
        </div>
    )
}

export default AboutUs
