import React from 'react'
import './welcome.css'

function Welcome(){

    return<div className='wrapper tt col-lg-6 col-md-12'>
        <h6>0% trading commission</h6>
        <h1> Join the best <br/> cryptocurrency <br/> exchange</h1>
        <p>Trade with over 50 different cryptocurrency and 
            fiat currency pairs, including Bitcoin Etherium and BNB pairs 
        </p>
        <button className='btn btn-lg mb-3' style={{backgroundColor:'#2aaf59', color:'white'}}>START TRADING</button>
        
    </div>
}

export default Welcome;