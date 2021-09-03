import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './btcwelcome.css'

function BtcVal(){
    const [bitcoin, setBitcoin] = useState('')
    const [error, setError] = useState('')
    const[loading, setLoading] = useState(true);

    useEffect( () =>{
        const fetchdata = async() =>{
          try {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
            console.log(res.data)
            setBitcoin(res.data);
          }
          catch(err){
            setError(error)
          }
          finally{
            setLoading(false);
          }
        };
        fetchdata()
    }, []);

    if(loading) return'Loading...';
    
    if(error) return <div style={{fontWeight: 'bold'}}>{error}</div>;

    return<div className='lifewrapper'>
        Bitcoin
        <img src={bitcoin['image'].thumb} className='m-2'style={{width:'30px'}}/> <br/>
        <div className='lifevalue'>
            <p>Live Value <span className='bold'>₦</span></p>
            <span className='bold'>{bitcoin['market_data'].current_price.ngn}</span>
        </div>
        <div className='lifevalue'>
            <p>Live Value <span className='bold'>$</span></p>
            <span className='bold'>{bitcoin['market_data'].current_price.usd}</span>
        </div>
    </div>
}

export default BtcVal
