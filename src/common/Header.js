import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const Header = styled.div`
    color: red;
    height:80px;
    width:auto;
    background-color:pink;
    display:flex;
  `;
  const Logo = styled.div`
    background:red;
    height:150px;
    width:350px;
    align-self:center;
    display:flex;
  `
  const Navigation = styled.div`
  display:flex;
  align-self:center;
  padding:10px;
  span{
    padding:10px;
    font-size:32px;
  }
  a{
    padding:10px;
    font-size:32px;
  }
  `
  return (
    <Header>
      <Logo>
        <img src="../logo.jpg" />
      </Logo>
      <Navigation>
        <Link to="/">Home</Link><span>|</span>
        <Link to="/about">About</Link><span>|</span>
        <a>Contact US</a>
      </Navigation>
    </Header>
  )

}
export default Header