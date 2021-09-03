import React,{useState, useEffect} from 'react'
import './welcome.css';
import Computer from 'bitcoin-computer'


function Welcome(){
    const [computer] = useState(new Computer({ seed: 'describe install ostrich blast region era course junior feed acoustic galaxy annual'}))
    const[balance, setBalance] = useState(0)

    useEffect(async () =>{
        setBalance(await computer.db.wallet.getBalance)
    }, [computer.db.wallet])


    return <div className='ww wrapper'>
        <h3>Current Portfolio</h3><br/>
        <b>Address</b>&nbsp; {computer.db.wallet.getAddress().toString()}
        BALANCE <br/><br/>
        <h2>$3,463.559 <br/> {balance}</h2>
        <span style={{color: 'green', fontWeight: 'bold'}}>+30.2%</span> today

    </div>
}

export default Welcome 