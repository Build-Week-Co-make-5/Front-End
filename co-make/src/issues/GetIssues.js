import React, { useState, useEffect, useContext } from "react";
import IssueContext from "../contexts/IssueContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import UpdateIssues from "./UpdateIssues";
import styled from "styled-components";

const Boxes = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: inherit;
  border: 5px solid black;
  width: 50%;
  margin: auto;
  padding: 5px;
  background: #c0eef0;
`;

// added styling for upvote button
const UpvoteBtn = styled.button`
  width: 5rem;
  height: 2rem;
`;

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
          <div key={cf.id}>
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
            <h4>
              {/* Image URL: <p>{cf.imgurl}</p> */}
              Image URL: <img src={cf.imgurl} alt="Issue" />{" "}
              {/* changed image url to render actual images */}
            </h4>
            <h4>
              Issue Details: <p>{cf.issue_details}</p>
            </h4>
            {/* ADDED UPVOTE FUNCTIONALITY */}
            <div className="upvote-count">
              <p>{upvotes} upvotes</p>
              <UpvoteBtn
                onClick={() => {
                  setUpvotes(upvotes + 1);
                  setDisabled(true);
                }}
                disabled={disabled}
              >
                Upvote
              </UpvoteBtn>
            </div>
            <button onClick={() => handleDelete(cf.id)}>Delete</button>
            <UpdateIssues id={cf.id} updateInfo={issueForm} />
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
