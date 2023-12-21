import Navbar from "./Navbar"
import  '../style/homepage.css'
import Carosal from "./Carosal"
import Footer from "./Footer"
import Events from "./Events"
import Leaders from "./Leaders"
import People from "./People"
export default function Homepage(){
    return(
        <>
        <div className="allccc">

        <Navbar></Navbar>
        <Carosal></Carosal>
        <People></People>
        <Leaders></Leaders>
        <Events></Events>
        <Footer></Footer>
        
        </div>
        </>
    )
}