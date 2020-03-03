import React from "react";
import Issue from "./Issue";

const IssueDetail = props => {
  const paramItemId = props.match.params.id;

  const data = props.data.find(data => {
    console.log("type of data.id", typeof data.id);
    return data.id === Number(paramItemId);
  });

  return (
    console.log(props.data),
    <div>
      <Issue
        issue_name={props.data.issue_name}
        issue_location={props.data.issue_location}
        category={props.data.category}
        priority={props.data.priority}
        imgURL={props.data.imgURL}
        issue_details={props.data.issue_details}
        key={props.data.id}
      />
    </div>
  );
};

export default IssueDetail;
