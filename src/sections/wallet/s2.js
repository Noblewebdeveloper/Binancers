import React, {useState} from 'react';
import Cryptocard from '../../components/wallet/cryptocard';
import './s2.css'
function Section2(){

    const coins = [
        {
            name: 'BTC',
            value: '0.00982',
        },
        {
            name: 'USDT',
            value: '300$',
        },
        {
            name: 'ETH',
            value: '700$'
        }
    ]

    return<div className ='wrapper s'>
            <div className='row ct'> 
            {
                coins.map(coin=><div className='col-lg-4 col-sm-6'>
                        <Cryptocard name={coin.name} value={coin.value} />
                            
                </div>)
            }   
            {/* the default format for the placement of a cryptocard */}
                <div className='col-lg-4 col-sm-6'>
                    <Cryptocard/>
                </div>
            </div>
        </div>
}
export default Section2