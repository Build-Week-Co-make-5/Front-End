import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { ActionBtns } from "../components/Style"; // to style update button

// THIS IS FOR THE USERS TO EDIT AN ISSUE
// Created a state called "isEditing" using the useState hook.
// The useState hook will return the current value of the issue and a function which we can use to edit the issue
const EditIssues = props => {
  // our editIssue state
  const [isEditing, setEditing] = useState({
    issue_name: "",
    issue_location: "",
    category: "",
    priority: "",
    imgurl: "",
    issue_details: ""
  });

  // const onClickHandler = () => {
  //   setUpdate( issue === "issue_name"? "false": "true");
  // }

  const handleEdit = id => {
    console.log(props.editInfo);
    axiosWithAuth()
      .put(`/api/issues/${id}`, props.editInfo)
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
    <div className="edit">
      <ActionBtns onClick={() => handleEdit(props.id)}>Edit</ActionBtns>{" "}
      {/* styled button */}
    </div>
  );
};
export default EditIssues;
