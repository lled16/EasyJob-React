import './App.css'
// import Cards from '../src/Components/Cards/Cards.jsx'
import Home from '../src/Components/Home/Home.jsx'
// import { Link } from 'react-router-dom'
import Login from './Components/Login/Login.jsx'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    
      <Router>
  
          <Routes>
            <Route exact path='/' element={<Home />}> </Route>

            <Route path='/login' element={<Login />}> </Route>
          </Routes>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul> */}

      </Router>

  )
}

export default App
