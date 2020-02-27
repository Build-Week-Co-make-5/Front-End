import React, { useState } from "react";
import Issue from "./Issue";

const IssueList = () => {

  return (
    <div>
      {issues.map(issue => (
        <Issue title={issue.title} priority={issue.priority} key={issue.id} />
      ))}
    </div>
  );
};

export default IssueList;
