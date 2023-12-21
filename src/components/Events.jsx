import '../style/evnts.css'
import Img from '../assest/img6.png'
export default function Events(){
    return(
        <>
        <div className='event '>
            <p className='eventpa'>Events & Programmes</p>
            <div className='flex cntent'>
            <div className='relative cnt'>
               <div className='relative'>
                <img className='eventimg' src={Img} alt="" />
                <div class="gradient-overlay"></div>
               </div>
               <div className='para absolute'>
                <p>Oct 19</p>
                </div> 
                <div className='fill'></div>
            </div>
            <div className='relative cnt'>
               <div className='relative'>
                <img className='eventimg' src={Img} alt="" />
                <div class="gradient-overlay"></div>
               </div>
               <div className='para absolute'>
                <p>Oct 19</p>
                </div> 
                <div className='fill'></div>
            </div>
            <div className='relative cnt'>
               <div className='relative'>
                <img className='eventimg' src={Img} alt="" />
                <div class="gradient-overlay"></div>
               </div>
               <div className='para absolute'>
                <p>Oct 19</p>
                </div> 
                <div className='fill'></div>
            </div>
            </div>
        </div>
        </>
    )
}