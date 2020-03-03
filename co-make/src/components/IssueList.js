// Good place to add state
import React, { useState, useContext, useEffect } from "react";
import Issue from "./Issue";
import { IssueContext } from "../IssueContext";
import AddIssue from "./AddIssue";
import SearchForm from "./SearchForm";
import axios from "axios";
import "../App.css";
import { Link, Route } from "react-router-dom";
import IssueDetail from "./IssueDetail";

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const getIssues = () => {
      axios
        .get("https://bw-pt-co-make5.herokuapp.com/api/issues")
        .then(res => {
          console.log("res", res);
          setIssues(res.data.issue);
        })
        .catch(error => console.log(error));
    };

    getIssues();
  }, []);

  return (
    console.log("issues", issues),
    (
      <div>
        <Link to="/addIssue">Add Issue</Link>
        <SearchForm issues={issues} />
        <Route path="/issue-list/:id" render={(renderProps) => {
          return <IssueDetail {...renderProps} data={issues} />
        }} />
      </div>
    )
  );
};

export default IssueList;

