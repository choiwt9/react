import { useContext } from "react"
import LogIn from "./LogIn";
import { UserContext } from "../App";




export default function Home(){
    const userCtx = useContext(UserContext);
    const user = userCtx.data;
return(
    <>
       {
        user.id === ''?
        <LogIn/>
        :
        <div>
            <p>{user.id}님 반갑습니다</p>
            <input type="button" value="로그아웃"
                  onClick={()=> {userCtx.setData({id: '', pwd: ''})}} />
        </div>
       }
    </>
)

}