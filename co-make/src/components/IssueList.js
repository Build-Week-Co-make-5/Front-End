import React, { useState, useContext, useEffect } from "react";
import { IssueContext } from "../IssueContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import EditIssues from "./EditIssues";
import AddIssue from "./AddIssue";
import SearchForm from "./SearchForm";

import '../App.css';

const IssueList = () => {
  const [issues, setIssues] = useContext(IssueContext);

  const [newIssue, setNewIssue] = useState({
    issue_name: '',
    issue_location: '',
    category: '',
    priority: '',
    imgURL: '',
    issue_details: ''
  })

  useEffect(() => {
    const getIssues = () => {
      axiosWithAuth()
      .get("/api/issues")
      .then(res => {
        console.log(res.data);
        setIssues(res.data);
      })
      .catch(error => console.log(error));
    };
    getIssues();
  }, [newIssue]);

  return (
    console.log("issues", issues),
    (
      <div className="issue-list">
        <ul>
          <SearchForm issues={issues} />
          {issues.map(issue => (
            <EditIssues title={issue.title} priority={issue.priority} key={issue.id} />
          ))}
          <AddIssue />
        </ul>
      </div>
    )
  );
};

export default IssueList;
