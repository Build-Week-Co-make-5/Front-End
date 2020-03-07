import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { ActionBtns } from "../components/Style"; // to style update button

const UpdateIssues = props => {
  const [update, setUpdate] = useState({
    issue_name: "",
    issue_location: "",
    categoryId: "",
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

  return (
    <div className="update">
      <ActionBtns onClick={() => handleUpdate(props.id)}>Update</ActionBtns> {/* styled button */}
    </div>
  );
};
export default UpdateIssues;
