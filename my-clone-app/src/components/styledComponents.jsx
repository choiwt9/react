import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
background-color:black;
min-height:100vh;
color: #fff;
padding: 1.2em;
`

export const Header = styled.header`
display: flex;
justify-content: space-between;
`
export const Logo = styled.span`
font-family: HakgyoansimDunggeunmisoTTF-B;
font-size: 20px;
color: skyblue;

&:hover {
 color: red;
 cursor: pointer;
}
`
export const Main = styled.main`
flex: 1;
`

export const FooterText = styled.p`
  font-size:12px;
`