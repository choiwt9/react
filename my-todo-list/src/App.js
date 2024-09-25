import logo from './logo.svg';
import './App.css';
import MyContainer from './components/MyContainer';
import InsertItem from './components/insertItem';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {

 const[list, setList] = useState(['샘플', '데이터']);

 const addItem = (item) => {//InsertItem 컴포넌트에서 추가될 데이터를 매개변수로 받아
                            //list 상태에 추가
     list.push(item);
     setList([...list]);                       
 }

  return (
    <div className="App">
      <MyContainer title="My TodoList">
        <InsertItem addItem={addItem}></InsertItem>
        <TodoList list={list}/>
      </MyContainer>
    </div>
  );
}

export default App;
