// Yen
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navigation, Division } from "./Style";
import { IssueContext } from '../IssueContext';

const Navbar = () => {
  const [issues, setIssues] = useContext(IssueContext);

  return (
    <Navigation className="navigation">
      <Division>
        <h2>Co-Make</h2>
        <h3>Neighborhood Issues: {issues.length}</h3>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </Division>
    </Navigation>
  );
};

export default Navbar;
