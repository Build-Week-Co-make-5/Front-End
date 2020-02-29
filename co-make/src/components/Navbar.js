// Yen
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Division } from "./Style";
import { IssueContext } from "../IssueContext";
import "../App.css";

const Navbar = () => {
  const [issues, setIssues] = useContext(IssueContext);

  return (
    <nav className="navigation">
      {/* <h2>Co-Make</h2> */}
      <Division>
        <h1>Co-Make</h1>
        <h3>Logo</h3>
        {/* Switched order of "Logo" and "Neighborhood issues" */}
        <h2>Neighborhood Issues: {issues.length}</h2>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link> {/* link to /login */}
        <Link to="/about">About</Link>
        <Link to="/issue-list">Issue List</Link>
        <Link to="/issue">Issue</Link>
        <Link to="/addIssue">AddIssue</Link>
      </Division>
    </nav>
  );
};

export default Navbar;
