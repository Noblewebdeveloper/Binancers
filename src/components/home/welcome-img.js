import React from 'react';
import phone from '../../images/phone-image.jpg'
import './welcome-img.css'

function WelcomeImg(){

    return<div className='wrapper col-lg-6 col-md-12 we'>
            <img src={phone} />
        </div>
}

export default WelcomeImg;