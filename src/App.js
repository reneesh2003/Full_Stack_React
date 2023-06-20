import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home'
import Account from './components/account'
import Product from './components/product'
import Checkout from './components/checkout'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/> 
          <Route path='/home/account' element={<Account/>}/>
          <Route path='/home/product' element={<Product/>}/>
          <Route path='/home/product/checkout' element={<Checkout/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
