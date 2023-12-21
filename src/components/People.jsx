import '../style/people.css'
import Imgpl from '../assest/img4.png'
export default function People(){
    return(
        <>
        <div className='people flex relative'>
            <div>
                <h1 className='plehead'>The best we can do <br />
                for <span className='pletitle'>people</span> </h1>
                <p className='paraple'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius harum rerum architecto repellendus deleniti quam corrupti, adipisci quas. Ipsum consequuntur necessitatibus, dolore distinctio, neque voluptas molestias officia animi consectetur obcaecati laudantium soluta. Dolorem omnis blanditiis corporis natus nulla architecto iusto!</p>
            </div>
            <div>
                <img className='pleimg' src={Imgpl} alt="..." />
                <div className='ovalss'></div>
                <div className='domss'>
                    <div>
                        <p className='prename'>Mr. A.M. Vikramaraja</p>
                        <hr />
                        <p className='pred'>State President <br />
Tamil Nadu Vanigar Sangam</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}