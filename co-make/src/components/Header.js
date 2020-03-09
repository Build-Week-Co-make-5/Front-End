import React from "react";
import { NavLink, Route } from "react-router-dom";
import CM from "../images/CM.png";
import styled from "styled-components";

const Header = styled.div`
  background: #3ebdc2;
  height: 5rem;
`;

/*
Darker teal color: #3EBDC2
Powder blue: #C0EEF0
*/

const Links = styled.div`
  display: flex;
  flex-direction: row; // changed from wrap to row
  justify-content: space-around;
  width: 35%;
`;
const HeaderLink = styled.h4``; // changed from h2 to h4

export function Navigation() {
  return (
    <Header className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <h1 className="navbar-brand" to={"/"}>
            <a href="https://comakemarket.netlify.com/" style={{textDecoration: "underline overline", color: "black"}}>
            CO-MAKE NEIGHBORHOOD
            </a>
          </h1>
          <img src={CM} alt="logo" />
        </div>
        <Links className="nav navbar-nav">
          {/* <HeaderLink><NavLink exact to={'/'}>Home</NavLink></HeaderLink> */}
          <HeaderLink>
            <NavLink className="nav-links" to={"/SignUp"}>Sign-Up</NavLink> {/* added className for styling */}
          </HeaderLink>
          <HeaderLink>
            <NavLink className="nav-links" to={"/"}>Log In</NavLink> {/* added className for styling */}
          </HeaderLink>
          <HeaderLink>
            <NavLink className="nav-links" to={"/logout"}>Log Out</NavLink>
          </HeaderLink>
          <HeaderLink>
            <NavLink className="nav-links" to={"/issues"}>Issues</NavLink>
          </HeaderLink>
        </Links>
      </div>
    </Header>
  );
}
export default Navigation;
