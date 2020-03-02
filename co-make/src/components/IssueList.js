// Good place to add state
import React, { useState, useContext, useEffect } from "react";
import Issue from "./Issue";
import { IssueContext } from "../IssueContext";
import AddIssue from "./AddIssue";
import SearchForm from "./SearchForm";
import axios from "axios";
import '../App.css';

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
        <AddIssue />
        <SearchForm issues={issues} />
      </div>
    )
  );
};

export default IssueList;

