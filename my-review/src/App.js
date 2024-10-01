import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Timer from './Components/Timer';
import CountLetters from './Components/CountLetters';
import Home from './Components/Home';
import { createContext, useState } from 'react';
import Stopwatch from './Components/Stopwatch';

export const UserContext = createContext();
let defaultUser = {
   id: '',
   pwd: ''
}

function App() {
  const [user, setUser] = useState(defaultUser);
  const defaultContext = {
         data: user,
         setData: setUser
  }

  return (
  <BrowserRouter>
  <header>
    <nav style={{backgroundColor: "teal"}}>
      <Link to="/">HOME</Link>
      <Link to="/timer">타이머</Link>
      <Link to="/countLetter">글자 수 세기</Link>
      <Link to="/stopwatch">스톱워치</Link>
    </nav>
    </header>
    <UserContext.Provider value={defaultContext}>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/timer" element={<Timer/>}/>
      <Route path="/countLetter" element={<p>테스트</p>}/>
      <Route path="/stopwatch" element={<Stopwatch/>}/>
   </Routes>
   </UserContext.Provider>
    </BrowserRouter>
    

  );
}

export default App;
