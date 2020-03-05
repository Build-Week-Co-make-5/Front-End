// Good place to add state
import React, { useState, useContext, useEffect } from "react";
import Issue from "./Issue";
import { IssueContext } from "../contexts/IssueContext";
import AddIssue from "./AddIssue";
import SearchForm from "./SearchForm";
import axios from "axios";
import "../App.css";
// import { Link } from "react-router-dom"; moved to SearchForm
import { Route } from "react-router-dom"; //created new route

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  const [newIssue, setNewIssue] = useState({
    issue_name: "",
    issue_location: "",
    category: "",
    priority: "",
    imgURL: "",
    issue_details: ""
  });

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
        <SearchForm issues={issues} />
        {/* added a Route to render each individual issue page by ID */}
        <Route
          path="/issue-list/:id"
          render={renderProps => {
            return <Issue {...renderProps} data={issues} />;
          }}
        />
      </div>
    )
  );
};

export default IssueList;
