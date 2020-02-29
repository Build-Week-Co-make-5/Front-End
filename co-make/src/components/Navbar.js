// Yen
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navigation, Division } from "./Style";
<<<<<<< HEAD
import { IssueContext } from "../IssueContext";
=======
import { IssueContext } from '../IssueContext';
import '../App.css';
>>>>>>> 28d1a7a94bf166bf5d2e7ffbade10dc6ff7bb9db

const Navbar = () => {
  const [issues, setIssues] = useContext(IssueContext);

  return (
    <Navigation className="navigation">
      <h2>Co-Make</h2>
      {/* <h4>Neighborhood Issues: {issues.length}</h4> */}
      <Division>
<<<<<<< HEAD
        <Link to="/">Login</Link>
=======
        <h1>Co-Make</h1>
        <h2>Neighborhood Issues: {issues.length}</h2>
        <h3>Logo</h3>
>>>>>>> 28d1a7a94bf166bf5d2e7ffbade10dc6ff7bb9db
        <Link to="/register">Register</Link>
        <Link to="/">Login</Link>
        <Link to="/about">About</Link>
        <Link to="/issue-list">Issue List</Link>
        <Link to="/issue">Issue</Link>
        <Link to="/addIssue">AddIssue</Link>
      </Division>
    </Navigation>
  );
};

export default Navbar;
