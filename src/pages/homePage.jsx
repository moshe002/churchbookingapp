import Body from '../components/Homepage/BodyText';
import Slider from '../components/Homepage/Slider';
import Verse from '../components/Homepage/Verse';

function HomePage () {
    return (
    <div className='border-t-4 border-b-4'>
        <div className="flex flex-col justify-center items-center pb-14">
            <Body />
            <Slider />
            <Verse />
        </div>
    </div>
    )
}

export default HomePage
