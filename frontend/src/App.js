// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import { Login } from './Login';
import Dashboard from './Dashboard';
import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext ';

function App() {
  // const user = false;
  // const [user, setUser] = useState(true);
  const {user} = useContext(AuthContext);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <body>
        <BrowserRouter>
          <Routes>
            {
              user ? (
                <>
                  <Route path='/dashboard' element ={<Dashboard />} />
                </>
              ): (
                <>
                  <Route path='/login' element ={<Login/>} />
                  <Route path='/' element ={<Signup/>} />
                </>
              )
            }
          </Routes>
        </BrowserRouter>
        {/* <Signup /> */}
        {/* <Login /> */}
      </body>
    </div>
  );
}

export default App;
