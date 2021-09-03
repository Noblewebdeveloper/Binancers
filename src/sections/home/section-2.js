import React, {useState, useEffect} from 'react';
import './section-2.css';
import BtcVal from '../../components/rates/btcwelcome'
import EthVal from '../../components/rates/ethereumwelcome'
import LtcVal from '../../components/rates/litecoinwelcome'
import UsdVal from '../../components/rates/usdtwelcome'
import {Link} from 'react-router-dom';

function Section2 (){  
  return <div className='wrap container' style={{margin: 'none'}}>
    <div className='row v' style={{display: 'inlineFlex'}}>
        <div className='col-lg-3 col-sm-6 mb-3 mb-lg-0'>
          <BtcVal/>
        </div>
        <div className='col-lg-3 col-sm-6 mb-3 mb-lg-0'>
            <EthVal/>
        </div>
        <div className='col-lg-3 col-sm-6 mb-3 mb-lg-0'>
            <LtcVal/>
        </div>
        <div className='col-lg-3 col-sm-6 mb-3 mb-lg-0'>
            <UsdVal/>
        </div>
    </div> <br/>
    <div style={{textAlign: 'center'}}>
        <p ><Link to='/market' className='more'>View More Markets -></Link></p>
    </div>
  </div>
}


export default Section2;