// Good place to add state
import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import "../App.css";
// import { Link } from "react-router-dom"; moved to SearchForm
import { Route } from "react-router-dom"; //created new route
// import Image1 from "./Image1/img_1.jpg";
// import Image2 from "./Image2/Image2/img_2.jpg";
// import Image3 from "./Image3/img_3.jpg";
// import Image4 from "./Image4/img_4.jpg";
// import Image5 from "./Image5/img_5.jpg";
// import Image6 from "./Image6/img_6.jpg";
// import { Link } from "react-router-dom"; // moved to SearchForm
import Issue from "./Issue";
import Images from "./Images/img_1.jpg"; 

// console.log(Image1);
// console.log(Image2);
// console.log(Image3);
// console.log(Image4);
// console.log(Image5);
// console.log(Image6);

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
        {/* <img src={Image1} alt="issue image1" />
        <img src={Image2} alt="issue image2" />
        <img src={Image3} alt="issue image3" />
        <img src={Image4} alt="issue image4" />
        <img src={Image5} alt="issue image5" />
        <img src={Image6} alt="issue image6" /> */}
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
};

export default IssueList;
