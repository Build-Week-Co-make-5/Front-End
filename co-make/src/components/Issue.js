import React, { useState } from "react";

// {issue_name, issue_location, category, priority, imgURL, issue_details,} refactored props
const Issue = (props) => {
  const [upvotes, setUpvotes] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    // refactored the code below to reflect each ID's issue props ***
    <div className="issue-card">
      <h3>{props.issue_name}</h3>
      <div className="issue-desc">
        {/* <p className="issue-img">{imgurl}</p> */}
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
