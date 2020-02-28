import React, { useState, useContext } from "react";
import Issue from "./Issue";
import { IssueContext } from '../IssueContext';

const IssueList = () => {
  const [issues, setIssues] = useContext(IssueContext);

  return (
    <div>
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
