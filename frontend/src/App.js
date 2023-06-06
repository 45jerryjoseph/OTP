import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import { Login } from './Login';

function App() {
  const user = false;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <BrowserRouter>
          <Routes>
            {
              user ? (
                <Route path='/' element ={<Login/>} />
              ): (
                <Route path='/' element ={<Signup/>} />
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
