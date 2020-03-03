import React, { useState } from "react";

const Issue = ({
  issue_name,
  issue_location,
  category,
  priority,
  imgURL,
  issue_details
}) => {
  const [upvotes, setUpvotes] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
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
