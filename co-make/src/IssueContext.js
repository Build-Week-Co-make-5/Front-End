import React, { useState, createContext } from 'react';

export const IssueContext = createContext();

export const IssueProvider = props => {
  const [issues, setIssues] = useState([
      {
        title: "There is a pothole on my street",
        priority: "medium",
        id: 1
      },
      {
        title: "There is a cat on top of the tree",
        priority: "low",
        id: 2
      },
      {
        title: "A baby is missing",
        priority: "high",
        id: 3
      }
    ]);

  return(
    <IssueContext.Provider value={[issues, setIssues]}>
      {props.children}
    </IssueContext.Provider>
  );
};
