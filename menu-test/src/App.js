import {useState} from 'react';

import './App.css';

function App() {
  //menu 라는 상태를 관리해보기. (초기값: "home")
  const [menu, setMenu] = useState("home");
  const changeMenu = () => {
    if(menu === "home")
    setMenu("test");
  else
  setMenu("home");
  }

  return (
    <div className="App">
      <header className="App-header">
        메뉴 테스트 : <button onChange={changeMenu}>메뉴 변경</button>
        <p>현재 메뉴명 : {menu}</p>
        {/* 현재 메뉴가 home인 경우 "여기는 home 메뉴입니다" 표시 */}
        {
          menu =="home"?
          <p>여기는 home 메뉴입니다.</p>
         : <p>여기는 home 메뉴가 아닙니다.</p>
        }
        <hr/>
        {
          menu == "home" &&
          <p>Home Menu!</p>
        }
      </header>
    </div>
  );
}

export default App;
