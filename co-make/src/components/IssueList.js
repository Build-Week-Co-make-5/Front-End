// Good place to add state
import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import "../App.css";
// import { Link } from "react-router-dom"; moved to SearchForm
import { Route } from "react-router-dom"; //created new route
import Images from "./Images/img_1.jpg";
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
    issue_details: ""
  });

  useEffect(() => {
    const getIssues = () => {
      axios
        .get("https://bw-pt-co-make5.herokuapp.com/api/issues")
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
        {/* added a Route to render each individual issue page by ID */}
        <Route
          path="/protected/:id"
          render={renderProps => {
            return <Issue {...renderProps} data={issues} />;
          }}
        />
      </div>
    )
    </div>
  );
};

export default IssueList;
