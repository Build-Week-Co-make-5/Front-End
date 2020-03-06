// Good place to add state
import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import Images from "./Images/img_1.jpg";
import "../App.css";
// import { Link } from "react-router-dom"; // moved to SearchForm

console.log(Images);

function IssueList() {
  const [issues, setIssues] = useState([]);

  const [newIssue, setNewIssue] = useState({
    issue_name: "",
    issue_location: "",
    category: "",
    priority: "",
    imgURL: "",
    issue_details: "",
  });

  useEffect(() => {
    const getIssues = () => {
      axios
        .get("https://bw-pt-co-make5.herokuapp.com/api/issues",
        )
        .then(res => {
          console.log("res", res);
          setIssues(res.data.issue);
        })
        .catch(error => console.log(error));
    };
    getIssues();
  }, []);

  // Import result is the URL of my image
  return (
    <div className="issue-list">
    <img src={Images} alt="issue images" />
    console.log("issues", issues),
    (
      <div>
        <SearchForm issues={issues} />
      </div>
    )
    </div>
  );
};

export default IssueList;

