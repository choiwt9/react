import { useEffect, useState } from 'react';

function Clicker( ){

    const [count, setCount] = useState(0);
    //const[상태명, 상태변경시 사용할 함수명] = useState(초기값);
   
    useEffect(()=>{
     document.title = '클릭횟수 :' +count; 
    })
 //렌더링 될 때마다 실행

   return (
        //반드시 요소(Element) 하나만 리턴해야 한다!
        <div>
          <p>클릭횟수 :{count}</p>
             <button onClick={()=>{
              setCount(count+1)
             }}>클릭</button>
        </div>
   );
}

export default Clicker;