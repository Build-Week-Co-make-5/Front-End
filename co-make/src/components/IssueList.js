import React, { useState, useContext } from "react";
import Issue from "./Issue";
import { IssueContext } from '../IssueContext';
import AddIssue from "./AddIssue";
import SearchForm from "./SearchForm";

const IssueList = () => {
  const [issues, setIssues] = useContext(IssueContext);

  return (
    console.log(issues),
    <div>
    <AddIssue />
    <SearchForm />
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
