import React, { useState, useEffect, useContext } from "react";
import IssueContext from "../contexts/IssueContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import { ActionBtns } from "../components/Style";
import Upvote from "./Upvote";
import EditIssues from "./EditIssues";

import styled from "styled-components";

const Boxes = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: inherit;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 5px;
  background: #c0eef0;
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
  }, []);

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

  const handleDelete = id => {
    axiosWithAuth()
      .delete(`/api/issues/${id}`)
      .then(res => {
        console.log(res);
        axiosWithAuth()
          .get("/api/issues")
          .then(res => {
            console.log(res);
            setIssues(res.data.issue); // should be res.data.issue instead of res.data
          })
          .catch(err => {
            console.log(err);
          });
      });
  };
  //SET STATE TO RESPONSE

  return (
    <div className="issues">
      <h2>Issues Created by Neighbors</h2>
      <Boxes>
        {issues.map(cf => (
          // refactored element tags for styling purposes
          <div key={cf.id} className="issue-card">
            <br />
            <h4>
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
            <div className="box">
              {cf.imgurl ? (
                <h4>
                  Image URL <img src={cf.imgurl} />{" "}
                </h4>
              ) : null}
            </div>
            <h4>
              Issue Details: <p>{cf.issue_details}</p>
            </h4>
            {/* ADDED UPVOTE FUNCTIONALITY */}
            <div className="issue-actions">
              {/* moved Upvote function to Upvote.js */}
              <Upvote id={cf.id} />
              <ActionBtns onClick={() => handleDelete(cf.id)}>
                Delete
              </ActionBtns>
              <EditIssues id={cf.id} editInfo={issueForm} />
            </div>
          </div>
        ))}
      </Boxes>

      <form onSubmit={handleSubmit}>
        <h5> Add an Issue</h5>
        <input
          type="text"
          name="issue_name"
          placeholder="Issue"
          value={issueForm.issue_name}
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
        <input
          type="text"
          name="priority"
          placeholder="Priority"
          value={issueForm.priority}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="imgurl"
          placeholder="Image URL"
          value={issueForm.imgurl}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="issue_details"
          placeholder="Issue Details"
          value={issueForm.issue_details}
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
