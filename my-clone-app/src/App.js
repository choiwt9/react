import{BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components'

import './App.css';
import './css/fonts.css';
import {FooterText, Header, Logo, Main, MainContainer} from './components/styledComponents'
import Menubar from './components/menubar'

function App() {
  return (

    <BrowserRouter>
    <MainContainer>
   <Header>
       {/* 로고 | 메뉴 | 마이페이지 */}
       <Logo>TakPlayer</Logo>
      <Menubar/>
        MyPage
   </Header>

   <Main>
       {/* 메인 컨텐츠 영역 */}
       <Routes>
              <Route  path="/" element={<p>메인 화면</p>}/>
            </Routes>
   </Main>

   <footer>
       {/* 회사 정보 | 연락처... */}
       <h3>네플릭스 대한민국</h3>
       <FooterText>네플릭스 코리아 xx회사</FooterText>
       <FooterText>대표: 외계인</FooterText>
       <FooterText>이메일 주소 : alien@anotherplanet.com</FooterText>
       <FooterText>주소 : 안드로메다 은하</FooterText>
   </footer>
   </MainContainer>
   </BrowserRouter>
  );
}

export default App;
