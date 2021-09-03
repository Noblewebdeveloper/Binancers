import React,{useState, useEffect} from 'react';
import axios from 'axios'
import './market.css'

function Market (){
    const[coins, setCoins] = useState([])
    const[search, setSearch] = useState('');
    useEffect(() =>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false')
            .then(res =>{
                setCoins(res.data)
                console.log(coins)
            })
            .catch(error => alert('Error'))
    }, []);

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        )

    const handleChange = e =>{
        setSearch(e.target.value)
    }

    

    return<div className='market'>
        <div className='market-search'>
            <h2 className='coin-text'>Search a Currency</h2>
            <form>
                <input type='text' placeholder='Search' className='form-group coin-input' onChange={handleChange} />
            </form>
        </div>
        <div className='coin-container'>
            <div>
                <div className='coin'>
                    <h1>Coin</h1>
                    <p className='coin-symbol p'>Symbol</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price p'>$Current price</p>
                    <p className='coin-volume p'>Total volume</p>
                    <p className='coin-percent p'>Price change %</p>
                </div>
            </div>
            {filteredCoins.length > 0 ? <div>
                {filteredCoins.map( coin => (
                    <div className='coin-row'>
                        <div className='coin'>
                            <img src={coin.image} />
                            <h1>{coin.name}</h1>
                            <p className='coin-symbol p'>{coin.symbol}</p>
                        </div>
                        <div className='coin-data'>
                            <p className='coin-price p'>${coin.current_price}</p>
                            <p className='coin-volume p'>${coin.total_volume.toLocaleString()}</p>
                            {coin.price_change_percentage_24h < 0 ? (
                                <p className='coin-percent red p'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            ): (<p className='coin-percent green p'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)
                            }
                            <p className='coin-marketcap p'>
                                Mkt Cap: ${coin.market_cap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                ))} </div> : <div>
                        <div className='coin-row'>Your Request is not available</div>
                    </div>
            }
        </div>
    </div>
}

export default Market;