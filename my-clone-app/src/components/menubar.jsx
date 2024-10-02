import { Link } from "react-router-dom";
import styled from 'styled-components'

const MyLink = styled(Link)`
   text-decoration: none;
   color: #fff;

   &:hover{
       color: red;
   }
`

const menuStyle = {
   display: 'flex',
   minWidth:'500px',
   justifyContent: 'space-between',
   flex: 0.5
}

const Menubar = () => {
    return (
        
        <nav style={menuStyle}>
        <Link to="/">홈</Link>
        <Link to="/tv">TV 프로그램</Link>
        <Link to="/movie">영화</Link>
        <Link to="/newContents">최신 콘텐츠</Link>
        <Link to="/favorite">내가 찜한 콘텐츠</Link>
        </nav> 
    )
}
 
export default Menubar;
