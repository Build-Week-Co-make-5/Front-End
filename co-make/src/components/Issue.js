import React from "react";

const Issue = ({ issue_name, issue_location, category, priority, imgURL, issue_details }) => {
  
  return (
    <div>
      <h3>{issue_name}</h3>
      <p>{issue_location}</p>
      <p>{category}</p>
      <p>{priority}</p>
      <img src={imgURL} alt="issue-img" />
      <p>{issue_details}</p>
    </div>
  );
};

export default Issue;
