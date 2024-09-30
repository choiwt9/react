import { useState } from "react"

import {test1, test2, test3, test4} from '../service/testApi';


const Practice1 = () => {
 
    const [data, setData] = useState('');

    const changeData = async() => {
        
        

        //setData("테스트");
/*
          test2()
          .then(result=>{
            console.log("!!!!!");
          })
            */
           /* //async/await 사용
           const result = await teat3();
           console.log(test3());
           setData(result.msg);
           */
          //axios 사용
          const result = await test4();
          console.log(result);
          if(result.status === 200) {
            //요청 성공 시...
            setData(result.data.msg);
          }
    }

    return(
        <>
           <h3> 연습용 페이지</h3>
           <button onClick={changeData}>테스트</button>
           <textarea value={data}
               cols={30} rows={10} readOnly></textarea>
        </>
    )
}
export default Practice1;