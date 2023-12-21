import Img1 from "../assest/img5.png"
import Img2 from "../assest/img1.png"
import '../style/navbar.css'

export default function Navbar(){
     return(
        <>
        <div className="totalcc flex">
           <div className="flex ">
                <img src={Img1} className="" alt="Tamil Nadu 
                Vanigar Sangam" />
                <h1 className="navhead">Tamil Nadu  <br />
                    Vanigar Sangam</h1>
           </div>

           <div className="navbb">
            <ul className="navbdy">
            <li><a href="#">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Members</a></li>
            <li><a href="">Contact us</a></li>
            </ul>
        </div>
            <img className="minimage" src={Img2} alt="" />
            <button className="btnw ">Apply for membership</button>
           </div>
        </>
    )
}
   
