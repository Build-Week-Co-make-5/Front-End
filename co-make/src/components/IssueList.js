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
          title={issue.title} 
          priority={issue.priority} 
          key={issue.id} 
        />
      ))}
    </div>
  );
};

export default IssueList;
