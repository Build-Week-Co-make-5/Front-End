import React from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background: #3ebdc2;
`;

/*
Darker teal color: #3EBDC2
Powder blue: #C0EEF0
*/

const Links = styled.div`
  display: flex;
  flex-direction: wrap;
  justify-content: space-around;
`;
const HeaderLink = styled.h2``;

export function Navigation() {
  return (
    <Header className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <h1 className="navbar-brand" to={"/"}>
            CO-MAKE NEIGHBORHOOD
          </h1>
        </div>
        <Links className="nav navbar-nav">
          {/* <HeaderLink><NavLink exact to={'/'}>Home</NavLink></HeaderLink> */}
          <HeaderLink>
            <NavLink to={"/SignUp"}>Sign-Up</NavLink>
          </HeaderLink>
          <HeaderLink>
            <NavLink to={"/"}>Log In</NavLink>
          </HeaderLink>
        </Links>
      </div>
    </Header>
  );
}
export default Navigation;
