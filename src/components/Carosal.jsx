import Img from '../assest/img2.png'
import '../style/carosal.css'
export default function Carosal(){
    return(
        <>
        <div className='relative'>
            <img className='w-full' src={Img} alt="carosal image" />
             <p className='absolute crtxt'>We rise by <br />
                lifting others</p>
                <marquee className='absolute run' behavior="scroll" direction="left">this app is complted by whytap global servies </marquee>
        </div>
        </>
    )
}