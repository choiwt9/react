import { useState } from "react";
import styled from "styled-components";
import { GrAddCircle } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";
const InsertInput = styled.input`
    border:none;
    border-radius: 50px 0px 0px 50px;
    background-color: aqua;
    height: 40px;
    min-width: 250px;
    `
const InsertBtn = styled.button`
    width: 50px;
    height: 40px;
    border:none;
    cursor: pointer;
    border-radius:0px 50px 50px 0px;
    background-color: skyblue;
    color: white;
    font-size:25px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const InsertContainer = styled.div`
   width: 100%;
   display: inline-flex;
   justify-content: center;
`

const InsertItem = (props) => {
   const[todoItem, setTodoItem] = useState('');

   const addTodo = () => {
         props.addItem(todoItem);   //App 컴포넌트에서 setList, TodoList
   }

    return (

        <InsertContainer>

         <InsertInput value={todoItem} placeholder="할일 입력" onChange={(e)=>{setTodoItem(e.target.value); }}/>
         <InsertBtn onClick={addTodo}><IoAddCircleOutline /></InsertBtn>

        </InsertContainer>
    )

}

export default InsertItem;