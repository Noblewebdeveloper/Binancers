import React from 'react';
import logo from '../img/logo.PNG'

function Footer (){
    return <div className='containerfluid' style={{backgroundColor: '#070b16'}}>
        <div className='row'>
            <div className='col-lg-6 col-md-4'>
                <img src={logo} style={{height: '80px', width: '100px'}}></img>
                <h3 style={{display: 'inline-block'}}>CATWARS</h3>
                
            </div>
            <div className='col-lg-3 col-md-4'>
                <h4>Navigation</h4>
                <a href='#' style={{textDecoration:'none'}}><p>Home</p></a>
                <a href='#roadmap' style={{textDecoration:'none'}}><p>Roadmap</p></a>
                <a href='#tokenomics' style={{textDecoration:'none'}}><p>Tokenomics</p></a>
                <a href='https://bscscan.com/token/0x83520ca482a1c3bc1ccf73ceb58f6fee8a590da7' target='_blank' style={{textDecoration:'none'}}><p>Contract</p></a>
            </div>
            <div className='col-lg-3 col-md-4'>
                <h4>Links</h4>
                <a href='#' style={{textDecoration:'none'}}><p>Pancakeswap</p></a>
                <a href='https://twitter.com/CATWARS1' target="_blank" style={{textDecoration:'none'}}><p>Twitter</p></a>
                <a href='https://t.me/catwars' target="_blank" style={{textDecoration:'none'}}><p>Telegram</p></a>
                <a href='https://www.dextools.io/app/bsc/pair-explorer/0x83520ca482a1c3bc1ccf73ceb58f6fee8a590da7' target="_blank" style={{textDecoration:'none'}}><p>DexTools</p></a>
                <a href='#' style={{textDecoration:'none'}}><p>Coingecko</p></a>
            </div>
        </div>
        <p style={{paddingBottom: '30px', marginBottom: '0'}}>2021 CATWARS</p>
        
    </div>
}
export default Footer;