import React, { useState, useContext } from "react";
import Issue from "./Issue";
import { IssueContext } from '../IssueContext';
import '../App.css';

const IssueList = () => {
  const [issues, setIssues] = useContext(IssueContext);

  return (
    <div>
      <h1>Issue List</h1>
      {issues.map(issue => (
        <Issue 
          issue_name={issue.issue_name}
          issue_location={issue.issue_location}
          category={issue.category}
          priority={issue.priority}
          imgURL={issue.imgURL} 
          issue_details={issue.issue_details}
          key={issue.id} 
        />
      ))}
    </div>
  );
};

export default IssueList;
