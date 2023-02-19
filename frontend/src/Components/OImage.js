import React from 'react'
import "./OImage.css";


const OImage = ({ uri }) => {
    return (
        <div >
            <img src={uri} alt="" className='nav-icont' />
        </div>
    )
}

export default OImage
