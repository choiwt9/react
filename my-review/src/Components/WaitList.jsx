import { useEffect, useState } from "react";


const WaitList = () => {
    //useState : 상태관리 훅 
    //const [상태명, set상태명] = useState(초기값);

    const [list, setList] = useState([
        {name: '아이유', count: 10, phone: '010-1010-1010'},
        {name: '차은우', count: 5, phone: '010-1010-1010'},
        {name: '카리나', count: 3, phone: '010-1010-1010'}
    ]);

    const[name, setName] = useState(''); //이름 입력 관련 상태
    const[count, setCount] = useState(0); // 인원수
    const[phone, setPhone] = useState(''); // 연락처
/*
    useEffect(()=>{
        console.log("*************");
        console.log(list);
        console.log("*************");
    },[list]);
*/
    const addList = () => {
        const newPerson = {
            name: name,
            count: count,
            phone: phone
        };
//기존 데이터에 추가된 데개명단을 반영
        setList([...list,newPerson]);

        //일력 요소들을 초기화하기위해 상태변경
        setName('');
        setCount('');
        setPhone('');

    }

    return (
        <div align="center">
      <h3> 엘식당 대기 명단표</h3>
            <table border="1">
              <thead>
              <tr>
                <th>이름</th>  
                <th>인원 수</th>
                <th>연락처</th>  
                </tr>
               </thead>
               <tbody>
                {list.map((item, index)=>{
                    return(
                        <tr key={'wait' +  index}>
                         <td >{item.name}</td>
                         <td style={{color: item.count > 5? 'red' : item.count > 3? 'orange' : 'blue'}}>{item.count}</td>
                         <td className={item.count > 5 ? 'c-red' : 'c-blue'}>{item.phone === ''? '': '@' + item.phone} </td>
                        </tr>
                    )

                })
                }
               
               </tbody>
            </table>

          <hr />
          <hr />

<h4>새 대기자 추가 </h4> 
<div>
<input type="text" placeholder="이름입력" value={name}
           onChange={(e)=>{setName(e.target.value);}}/>
<input type="text" placeholder="인원 수 입력" value={count}
            onChange={(e)=>{setCount(e.target.value);}}/>
<input type="text" placeholder="연락처 입력"  value={phone}
            onChange={(e)=>{setPhone(e.target.value);}}/>
<button omclick={addList}>등록</button>

</div>
</div>
    )
}

export default WaitList;