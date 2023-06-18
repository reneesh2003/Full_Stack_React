import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home'
import Account from './components/account'
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
          </Routes>
      </Router>
    </div>
  );
}

export default App;
