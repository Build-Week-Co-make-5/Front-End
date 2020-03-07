import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const UpdateIssues = props => {
  const [update, setUpdate] = useState({
    issue_name: "",
    issue_location: "",
    category: "",
    priority: "",
    imgurl: "",
    issue_details: ""
  });

  const handleUpdate = id => {
    console.log(props.updateInfo);
    axiosWithAuth()
      .put(`/api/issues/${id}`, props.updateInfo)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  // after edit button clicked, get request - set the value of the populated forms fields 
  // issue_name: res.data.issue_name (back from the server)
  // submit form, put request back to the server, ==> another get request. updte itself automatically

  return (
    <div className="update">
      <button onClick={() => handleUpdate(props.id)}>Edit</button>
    </div>
  );
};
export default UpdateIssues;
