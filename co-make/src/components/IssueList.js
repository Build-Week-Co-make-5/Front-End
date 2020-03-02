import React, { useState, useContext, useEffect } from "react";
import Issue from "./Issue";
import { IssueContext } from "../IssueContext";
import AddIssue from "./AddIssue";
import SearchForm from "./SearchForm";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const IssueList = () => {
  // const [issues, setIssues] = useContext(IssueContext);
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
        {/* <AddIssue /> */}
        <Link to="/addIssue">Add Issue</Link>
        <SearchForm issues={issues} />
        {/* moved issues.map to SearchForm for search functionality */}
        {/* {issues.map(issue => (
          <Issue title={issue.title} priority={issue.priority} key={issue.id} />
        ))} */}
      </div>
    )
  );
};

export default IssueList;
