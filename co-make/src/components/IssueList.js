// Good place to add state
import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import "../App.css";
// import { Link } from "react-router-dom"; moved to SearchForm
import { Route } from "react-router-dom"; //created new route
// import { Link } from "react-router-dom"; // moved to SearchForm
import Issue from "./Issue";
import Images from "./Images/img_1.jpg"; 

function IssueList() {
  const [issues, setIssues] = useState([]);

  const [newIssue, setNewIssue] = useState({
    issue_name: "",
    issue_location: "",
    category: "",
    priority: "",
    imgurl: "",
    issue_details: "",
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
    console.log("issues", issues),
    (
      <div className="issue-list">
        <img src={Images} alt="issue images" />
        <div>
          <SearchForm issues={issues} />
          {/* added a Route to render each individual issue page by ID */}
          <Route
            path="/issue-list/:id"
            render={renderProps => {
              return <Issue {...renderProps} data={issues} />;
            }}
          />
        </div>
      </div>
    )
  );
}

export default IssueList;
