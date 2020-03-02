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

  return (
    <div>
      <h3>{issue_name}</h3>
      <p>{issue_location}</p>
      <p>{category}</p>
      <p>{priority}</p>
      <p>{imgURL}</p> {/* changed imgURL back to p element from img element */}
      <p>{issue_details}</p>
      <p>{upvotes} upvotes</p>
      <button onClick={() => setUpvotes(upvotes + 1)}>Upvote</button>
    </div>
  );
};

export default Issue;
