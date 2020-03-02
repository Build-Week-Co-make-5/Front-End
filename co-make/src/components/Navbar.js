// Yen
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IssueContext } from "../IssueContext";
import { Division } from "./Style";
import Logo from "./Logo/logo.png";
import "../App.css";

const Navbar = () => {
  const [issues, setIssues] = useContext(IssueContext);

  return (
    <nav className="navigation">
      <Division>
        <img src={Logo} alt="website logo" />
        {/* Switched order of "Logo" and "Neighborhood issues" */}
        <h2>Total Neighborhood Issues: {issues.length}</h2>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link> {/* link to /login */}
        <Link to="/accountInfo">Profile</Link>
        <Link to="/about">About</Link>
        <Link to="/issue-list">Issue List</Link>
        <Link to="/issue">Issue</Link>
        <Link to="/addIssue">AddIssue</Link>
      </Division>
    </nav>
  );
};

export default Navbar;
