import React, { useState } from "react";

const Issue = ({
  issue_name,
  issue_location,
  category,
  priority,
  imgURL,
  issue_details,
  data // added data prop from IssueList
  // N.B. MIGHT NEED TO REFACTOR ALL CODE TO JUST CALL PROPS
}) => {
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
    // might refactor the code below to reflect each ID's issue props
    <div className="issue-card">
      <h3>{issue_name}</h3>
      <div className="issue-desc">
        <p className="issue-img">{imgURL}</p>
        {/* changed imgURL back to p element from img element */}
        <div className="info">
          <p>Location: {issue_location}</p>
          <p>Category: {category}</p>
          <p>Priority: {priority}</p>
          <p>Description: {issue_details}</p>
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
