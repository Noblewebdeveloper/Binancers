import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HNav from './component/nav';
import twitter from './img/twitter.png'
import telegram from './img/telegram.png'
import Footer from './component/footer'
import Supply from './img/supply.png'
import Gem from './img/gem.png'

function App() {
  return<div className='App'>
    <HNav/>

    <div className='landing'>
      <h1 className='welcomeheader'>Welcome to CATWARS!</h1>
      <h3>Join our Community</h3>
      <div>
        <a href='https://t.me/catwars' target="_blank">
          <button className='btn'><img src={telegram} className='socialicons'></img>
            <span style={{color: 'white'}}>Telegram</span> 
          </button>
        </a>
        <a href='https://twitter.com/CATWARS1' target='_blank'>
          <button className='btn' ><img src={twitter}className='socialicons'/>
            <span style={{color: 'white'}}>Twitter</span>
          </button>
        </a>        
      </div>
      
    </div>

    <div className='introduction'>
      <div className='containerfluid'>
        <h1 className='introductionheader'>INTRODUCTION </h1><br></br>
        <div className='row'>
          <div className='col-lg-6'>
            <p>CATWARS! A universe where the female race battle for the right
              to live and rule the 7 kingdoms of Gotkrëza. The fate of Madhud,
              Zekrta, Pharka, Valeztka, Regale, North & South Qutaz lies in the 
              hand of Catwomen.
            </p>
            <p>This project creates a battlefield for the female race to become Queens.</p>
            <p>
              How to play: <br></br>
              - Mint your Character. <br></br>
              - build the physique of your character. <br></br>
              - Mint weapons for your character. <br></br>
              - Grow a virtual army with other players. <br></br>
              - Conquer a territory. <br></br>
              - Rule a kingdom. <br></br>
              (To be launched soon) <br></br>

            </p>
            <br></br>
            <br></br>
          </div>
          <div className='col-lg-6'>
            <h4>Token name: CATWARS</h4>
            <h4>Ticker: CWARS</h4>
            <h4>Contract address: Coming</h4>
            <h4>Tax: 4% </h4>
            <h4>LAUNCHING ON BSC!</h4>
            <h4>DATE: 5/11/2011</h4>
            <h4>TIME: 8PM UTC</h4>
            <h4>FAIR LAUNCH, NO PRESALE!</h4>
          </div>
        </div>
      </div>
    </div>

    <div id='tokenomics'>
      <div className='containerfluid'>
        <div className='tokenomicspad'>
          <h3 style={{textAlign: 'center'}}>CatWars</h3>
          <h3 style={{textAlign: 'center', color: 'blue'}}>Token Economics</h3><br></br>
          <div className='row'>
            <div className='col-lg-6' style={{textAlign: 'center'}}>
              <img src={Supply}  style={{height: '30px', width: '30px'}}></img><br/><br/>
              <h5>Total Supply</h5>
              <h5>1,000,000,000</h5>
            </div>
            <div className='col-lg-6' style={{textAlign: 'center'}}>
              <img src={Gem} style={{height: '30px', width: '30px'}}></img><br/><br/>
              <h5>Development Locked Tokens</h5>
              <h5>10%</h5>
            </div>
          </div>  
        </div>
      </div>
    </div>
    
    <div id='roadmap'>
      <div className='containerfluid'>
        <h3 style={{textAlign: 'center'}}>METACAT ROADMAP</h3>
        <div className='row'>
          <div className='col-lg-6' style={{textAlign: 'center'}}>
            <p>
              Q4 2021 <br></br>
              - Launch<br></br>
              - Community Airdrop (Twitter and telegram)<br></br>
              - Coingecko/CoinMarketCap listing<br></br>
              - Game development<br></br>
              - Character and territory sales<br></br>
              - Game launch
            </p>
          </div>
          <div className='col-lg-6' style={{textAlign: 'center'}}>
            <p>
              Q1 2022<br></br>
              - Marketplace<br></br>
              - Partnership
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer/>

  </div>

}

export default App;
