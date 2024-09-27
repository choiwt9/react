import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CountLetters from './Components/CountLetters';

function App() {
  return (
  <>
    <nav style={{backgroundColor: "teal"}}>
      <Link to="/">HOME</Link>
      <Link to="/timer">타이머</Link>
      <Link to="/countLetter">글자 수 세기</Link>
    </nav>

    <Timer />
   <Routes>
      <Route path="/" element={<p>메인</p>}/>
      <Route path="/timer" element={<Timer/>}/>
      <Route path="/countLetter" element={<p>테스트</p>}/>
   </Routes>
   <CountLetters />
    </>
  );
}

export default App;
