import React from "react";
import { Link } from "react-router-dom";
import {Navigation, Division} from "./Style";

const Navbar = () => {
  return (
    <Navigation className="navigation">
      <Division>
        <h2>Co-Make</h2>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <h3>Hello</h3>
      </Division>
    </Navigation>
  );
};

export default Navbar;
