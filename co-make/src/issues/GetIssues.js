import React, { useState, useEffect, useContext } from "react";
import IssueContext from "../contexts/IssueContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import EditIssues from "./EditIssues";
import styled from "styled-components";
import { ActionBtns } from "../components/Style";
import Upvote from "./Upvote";

const Boxes = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: inherit;
  width: 90%;
  margin: auto;
  padding: 5px;
  // background: #c0eef0;
`;

// STYLING AND FUNCTIONALITY OF UPVOTES MOVED TO Upvote.js

/*
Darker teal color: #3EBDC2
Powder blue: #C0EEF0
*/

//THIS IS FOR THE USERS TO CREATE A NEW ISSUE
const GetIssues = () => {
  const { events, setEvents } = useContext(IssueContext);
  const [issues, setIssues] = useState([]);
  const [issueForm, setIssueForm] = useState({
    issue_name: "",
    issue_location: "",
    category: "",
    priority: "",
    imgurl: "",
    issue_details: ""
  });

  // for upvote functionality
  const [upvotes, setUpvotes] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleChange = e => {
    setIssueForm({ ...issueForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/api/issues", issues)
      .then(res => {
        console.log(res);
        setIssues(res.data.issue); // should be res.data.issue instead of res.data
      })

      .catch(err => {
        console.log(err);
      });
  }, [issues]);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/issues", issueForm)
      .then(res => {
        setIssueForm({
          issue_name: "",
          issue_location: "",
          category: "",
          priority: "",
          imgurl: "",
          issue_details: ""
        });
        setEvents([...events, res.data]);
        setIssues([...issues, res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  };
  //SET STATE TO RESPONSE

  const handleDelete = id => {
    axiosWithAuth()
      .delete(`/api/issues/${id}`)
      .then(res => {
        console.log(res);
        setEvents(events.filter(item => item.id !== id));
        setIssues(issues.filter(item => item.id !== id));
        setIssueForm(issueForm.filter(item => item.id !== id));
      });
  };

  return (
    <div className="issues">
      <h2>Issues Created by Neighbors</h2>
      <Boxes>
        {issues.map(cf => (
          // refactored element tags for styling purposes
          <div key={cf.id} className="issue-card">
            <br />
            <h4>
<<<<<<< Updated upstream
              Issue: <h5>{cf.issue_name}</h5>
=======
              Issue: <p>{cf.issue_name}</p>
            </h4>
            <h4>
              Issue Location: <p>{cf.issue_location}</p>
            </h4>
            <h4>
              Category: <p>{cf.category}</p>
            </h4>
            <h4>
              Priority: <p>{cf.priority}</p>
            </h4>
            {cf.imgurl?<h4>Image URL <img src={cf.imgurl} />{" "}
            </h4>:null}
            <h4>
              Issue Details: <p>{cf.issue_details}</p>
>>>>>>> Stashed changes
            </h4>
            <div className="issue-desc">
              <div className="issue-img">
                <img src={cf.imgurl} alt="image" />
              </div>
              <div className="issue-details">
                <h4>
                  Issue Location: <h5>{cf.issue_location}</h5>
                </h4>
                <h4>
                  Category Id: <h5>{cf.category}</h5>
                </h4>
                <h4>
                  Priority: <h5>{cf.priority}</h5>
                </h4>
                <h4>
                  Issue Details: <h5>{cf.issue_details}</h5>
                </h4>
              </div>
            </div>
            {/* ADDED UPVOTE FUNCTIONALITY */}
            <div className="issue-actions">
              {/* moved Upvote function to Upvote.js */}
              <Upvote id={cf.id} />
              <ActionBtns onClick={() => handleDelete(cf.id)}>
                Delete
              </ActionBtns>
              <UpdateIssues id={cf.id} updateInfo={issueForm} />
            </div>
<<<<<<< Updated upstream
=======
            <button onClick={() => handleDelete(cf.id)}>Delete</button>
            <EditIssues id={cf.id} updateInfo={issueForm} />
>>>>>>> Stashed changes
          </div>
        ))}
      </Boxes>
      <form onSubmit={handleSubmit}>
        <h5> Add an Issue</h5>
        <input
          type="text"
          name="title"
          placeholder="Issue"
          value={issueForm.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="issue_location"
          placeholder="Location"
          value={issueForm.issue_location}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={issueForm.category}
          onChange={handleChange}
        />
        <br />

        <br />

        <button type="submit">Add new issue</button>
      </form>
    </div>
  );
};
export default GetIssues;
