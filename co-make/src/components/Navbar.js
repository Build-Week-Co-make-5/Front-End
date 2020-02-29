// Yen
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navigation, Division } from "./Style";
import { IssueContext } from "../IssueContext";
import "../App.css";

const Navbar = () => {
  const [issues, setIssues] = useContext(IssueContext);

  return (
    <Navigation className="navigation">
      <h2>Co-Make</h2>
      <Division>
        <h1>Co-Make</h1>
        <h2>Neighborhood Issues: {issues.length}</h2>
        <h3>Logo</h3>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link> {/* link to /login */}
        <Link to="/about">About</Link>
        <Link to="/issue-list">Issue List</Link>
        <Link to="/issue">Issue</Link>
        <Link to="/addIssue">AddIssue</Link>
      </Division>
    </Navigation>
  );
};

export default Navbar;
