import Body from '../components/Homepage/BodyText';
import Slider from '../components/Homepage/Slider';

function HomePage () {
    return (
    <div className='border-t-4 border-b-4'>
        <div className="flex flex-col justify-center items-center pb-14">
            <Body />
            <Slider />
        </div>
    </div>
    )
}

export default HomePage
