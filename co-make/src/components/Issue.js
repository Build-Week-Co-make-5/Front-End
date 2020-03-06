import React, { useState } from "react";

// {issue_name, issue_location, category, priority, imgURL, issue_details,} refactored props
const Issue = (props) => {
  const [upvotes, setUpvotes] = useState(0);
  const [disabled, setDisabled] = useState(false);

  // create a paramItemId variable to match to respective :id URLs
  console.log(props.match.params.id);
  const paramItemId = props.match.params.id;

  // matches each issue id to its params id
  const issue = props.data.find(issue => {
    return issue.id === Number(paramItemId);
  });

  console.log("issue found!", issue);

  return (
    // refactored the code below to reflect each ID's issue props ***
    <div className="issue-card">
      <h3>{props.issue_name}</h3>
      <div className="issue-desc">
        <p className="issue-img">{props.imgUrl}</p> {/* changed imgRUL to imgUrl */}
        {/* changed imgURL back to p element from img element */}
        <div className="info">
          <p>Location: {props.issue_location}</p>
          <p>Category: {props.category}</p>
          <p>Priority: {props.priority}</p>
          <p>Description: {props.issue_details}</p>
        </div>
      </div> {/* issue-desc */}
      <section className="upvotes">
        <p>{upvotes} upvotes</p>
        <button
          onClick={() => {
            setUpvotes(upvotes + 1);
            setDisabled(true);
          }}
          disabled={disabled}
        >
          Upvote
        </button>
      </section>
    </div>
  );
};

export default Issue;
