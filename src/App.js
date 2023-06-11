import './App.css';
import Login from './components/login'
import Signup from './components/signup';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
