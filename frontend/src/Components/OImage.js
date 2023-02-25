import { forwardRef } from 'react'
import "./OImage.css";


const OImage = forwardRef(({ uri }, ref) => {
    return (
        <div>
            <img src={uri} alt="" className='nav-icont' />
        </div>
    )
})


/*  <div>
     <img src={uri} alt="" className='nav-icont' />
 </div> */

export default OImage
