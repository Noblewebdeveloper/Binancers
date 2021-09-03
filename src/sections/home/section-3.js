import './section-3.css';
import React, {useState} from 'react';
import wallet from '../../images/wallet.svg'
import phone from '../../images/img-brush.png'


function Section3(){

    const[shown1, setShown1] = useState(false)
    const[shown2, setShown2] = useState(false)
    const[shown3, setShown3] = useState(false)
    const[shown4, setShown4] = useState(false)
    const[shown5, setShown5] = useState(false)
    return<div className='section3'>
        <div className='inner'>
            <div className='brush'>
                <img src={wallet} style={{height: '30px', width: '30px', marginLeft:'20px',}}/> 
                <h5 style={{display: 'inline-block', marginLeft:'30px', marginTop: '10px'}}>Wallet</h5> 
            </div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <h2>The Easiest and Most Powerful Crypto Wallet</h2>
                    <div onMouseEnter={()=> setShown1(true)} onMouseLeave={()=> setShown1(false)} className='brushcontainer'>
                        <p className='brushvalue' style={{fontSize: '1.2rem'}}>Buy and Sell Crypto in Minutes<br/></p>
                        {shown1 &&(<div className='oju'>
                            <span className='more-info'>
                                Instantly buy Bitcoin with credit card, debit card, or by linking your bank.
                            </span>
                            </div>)}
                    </div>
                    <div onMouseEnter={()=> setShown2(true)} onMouseLeave={()=> setShown2(false)} className='brushcontainer'>
                        <p className='brushvalue' style={{fontSize: '1.2rem'}}>Earn up to 13.5% interest<br/></p>
                        {shown2 &&(<div className='oju'>
                            <span className='more-info'>
                                Fund an Interest Account with crypto and watch it grow.
                            </span></div>)}
                    </div>
                    <div onMouseEnter={()=> setShown3(true)} onMouseLeave={()=> setShown3(false)} className='brushcontainer'>
                        <p className='brushvalue' style={{fontSize: '1.2rem'}}>Control your Funds with a Private Wallet<br/></p>
                        {shown3 &&(<div className='oju'>
                            <span className='more-info'>
                                Instantly buy Bitcoin with credit card, debit card, or by linking your bank.
                            </span></div>)}
                    </div>
                    <div onMouseEnter={()=> setShown4(true)} onMouseLeave={()=> setShown4(false)} className='brushcontainer'>
                        <p className='brushvalue' style={{fontSize: '1.2rem'}}>All your crypto in one place<br/></p>
                        {shown4 &&(<div className='oju'>
                            <span className='more-info'>
                                View and manage your balance across Wallet, the Exchange, and your hardware, all in your wallet dashboard.
                            </span></div>)}
                    </div>
                    <button className='btn btn-lg mb-3' style={{backgroundColor:'#2aaf59', color:'white'}}>Get Started</button>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <img src={phone} className='walletphone' style={{marginTop:'10%'}}/>
                </div>
                
            </div>
        </div>
    </div>
}

export default Section3