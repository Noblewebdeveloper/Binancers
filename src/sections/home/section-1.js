import React from 'react'
import { Media } from 'react-bootstrap'
import HNav from '../../components/home/nav'
import Welcome from '../../components/home/welcome'
import WelcomeImg from '../../components/home/welcome-img'
import './section-1.css'

function Section1(){
    
    return<div className='section-1'>
        <HNav/>
        <Welcome/>
        <WelcomeImg/>
    </div>
}

export default Section1