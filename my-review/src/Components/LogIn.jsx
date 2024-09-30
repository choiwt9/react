import { useContext, useState } from "react"
import { UserContext } from "../App";

export default function LogIn(){

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const userCtx = useContext(UserContext);

    const handlerLogin = () => {
        userCtx.setData({id: id, pwd: pwd });
        //userCtx.setData => setUser
        //입력된 id, passwd를 context에 저장
    }

return(
    <div>
      <input type="text" placeholder='아이디'
             value={id} onChange={(e)=>{setId(e.target.value)}}/><br />
      <input type="password" placeholder='비밀번호'
             value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/><br />
      <input type="button" value="로그인"/>

    </div>
)


}