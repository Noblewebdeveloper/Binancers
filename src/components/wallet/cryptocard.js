import React from 'react'
import './cryptocard.css'

function Cryptocard(props){
     
    return <div>
        <div className='wallet-crypto-container'>
            <p className=''>{props.name}</p>
            <p className=''>{props.value}</p>
        </div>
    </div>
}

export default Cryptocard