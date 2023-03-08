import Body from '../components/Homepage/BodyText'
import Header from '../components/Homepage/HeaderText'


function HomePage () {
    return (
    <div>
        <Header />
        <div className="flex flex-col justify-center items-center pt-14 pb-14">
            <Body />
        </div>
    </div>
    )
}

export default HomePage
