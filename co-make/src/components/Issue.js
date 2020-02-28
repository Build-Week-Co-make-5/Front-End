import React from "react";

const Issue = ({title, priority}) => {
  
  return (
    <div>
      <h3>{title}</h3>
      <p>{priority}</p>
    </div>
  );
};

export default Issue;
