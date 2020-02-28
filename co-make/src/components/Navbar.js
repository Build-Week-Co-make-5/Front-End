import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, Nav } from "./Style";

const Navbar = () => {
  return (
    <div className="navigation">
      <NavContainer>
        <h2>Co-Make</h2>
        <Nav>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </Nav>
      </NavContainer>
    </div>
  );
};

export default Navbar;
