import Footer from '../components/Homepage/FooterText'
import Body from '../components/Homepage/BodyText'
import Header from '../components/Homepage/HeaderText'


function homePage () {
    return (
    <>
        <Header />
        <div className="flex flex-col justify-center items-center pt-14 pb-14 ml-10">
            <Body />
            <Footer />
        </div>
    </>
    )
}

export default homePage
