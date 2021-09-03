import React from 'react';
import Section1 from '../sections/home/section-1'
import Section2 from '../sections/home/section-2'
import Section3 from '../sections/home/section-3';
import About from '../sections/home/about'
import Section4 from '../sections/home/section-4'
import Footer from '../components/home/footer'


function Home(){
return<div className='App'>
    <Section1/>
    <Section2/>
    <Section3/>
    <About/>
    <Section4/>
    <Footer/>

</div>

}

export default Home;