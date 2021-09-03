import React from 'react';
import './footer.css'

function Footer(){
    return<div>
        <div className='footer'>
            <div className='row'style={{width: '80vw'}}>
                <div className='col-lg-5'>
                    <h3>More about Us</h3> <br></br>
                    <p style={{textAlign: 'justify'}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus consequuntur a obcaecati aut. Ut veniam id neque esse quidem omnis vitae, aliquam, praesentium quaerat, consectetur minima. Quos, reiciendis quasi?
                    </p>
                    <i style={{float: 'right'}}>-Fasasi ~CEO</i><br></br>
                </div>
                <div className='col-lg-3 e'>
                    <h3>Keep Connected</h3>
                    Like Us on Facebook<br></br>
                    Follow Us on Twitter<br></br>
                    Email us on Gmail <br></br>
                    Follow Us on Dribble <br></br>
                    Follow us On Pinterest <br></br>
                </div>
                <div className='col-lg-4 e' >
                    <h3>Contact Information</h3>
                    Binancers Crypto Exchange<br></br>
                    Ibadan, Oyo State<br></br>
                    Nigeria, Africa<br></br>
                    +2347089945000 <br></br>
                    timmcgraw1408@gmail.com<br></br>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;