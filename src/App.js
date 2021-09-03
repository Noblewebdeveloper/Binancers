import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './routes/home'
import Wallet from './routes/wallet'
import Market from './routes/market';


function App() {
  return<div className='App'>
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
      <Route path='/wallet' exact component={Wallet}></Route>
      <Route path='/market' exact component={Market}></Route>
    </BrowserRouter>
  </div>

}

export default App;
