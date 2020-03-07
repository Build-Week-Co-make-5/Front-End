import React, { useState, useEffect, useContext } from "react";
import IssueContext from "../contexts/IssueContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import UpdateIssues from "./UpdateIssues";
import styled from "styled-components";
import { ActionBtns } from "../components/Style";
import Upvote from "./Upvote";

const Boxes = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: inherit;
  // border: 5px solid #5857a9; // changed color from black to purple
  width: 90%;
  margin: auto;
  padding: 5px;
`;

// STYLING AND FUNCTIONALITY OF UPVOTES MOVED TO Upvote.js

//THIS IS FOR THE USERS TO CREATE A NEW ISSUE
const GetIssues = () => {
  const { events, setEvents } = useContext(IssueContext);
  const [issues, setIssues] = useState([]);
  const [issueForm, setIssueForm] = useState({
    issue_name: "",
    issue_location: "",
    categoryId: "",
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
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/issues", issueForm)
      .then(res => {
        setIssueForm({
          issue_name: "",
          issue_location: "",
          categoryId: "",
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
  //SET STATE TO RESPONSE

  return (
    <div className="issues">
      <h2>Issue I've created</h2>
      <Boxes>
        {issues.map(cf => (
          // refactored element tags for styling purposes
          <div key={cf.id} className="issue-card">
            <br />
            <h4>
              Issue: <h5>{cf.issue_name}</h5>
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
                  Category Id: <h5>{cf.categoryId}</h5>
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
          name="categoryId"
          placeholder="Category"
          value={issueForm.categoryId}
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
