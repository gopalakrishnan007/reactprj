import '../style/leaders.css'
import Img from '../assest/img3.png'
import Img11 from '../assest/img7.png'
import Img22 from '../assest/img8.png'
export default function Leaders(){
    return(

        <>
        <div className='leaders flex'>
            <div>
                <h1 className='ledhead '>The voice of the <br /> <span className='head'>Leaders</span></h1>
                <p className='ledpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellat dolore asperiores quo assumenda tempore fugiat, ipsa nam laborum vitae.</p>
                <button className='btnv'>View all</button>
            </div>
            <div className='flex leadimg'>
                <img src={Img11} alt="" />
                <img src={Img} alt="" />
                <img src={Img22} alt="" />
            </div>
        </div>

                </>
    )
}