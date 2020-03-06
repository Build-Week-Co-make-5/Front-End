// Good place to add state
import React, { useState, useEffect, useContext } from "react";
// import SearchForm from "./SearchForm";
import axios from "axios";
import "../App.css";
// import { Route } from "react-router-dom"; 
import Issue from "./Issue";
import { IssueContext } from "../contexts/IssueContext";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

function IssueList() {
  const [issues, setIssues] = useContext(IssueContext);

  const [searchTerm, setSearchTerm] = useState("");
  // searchResult is used to set the search result
  const [searchResults, setSearchResults] = useState(issues);

  // the handleChange method takes the event object as the argument and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const getIssues = () => {
      axios
        .get("https://bw-pt-co-make5.herokuapp.com/api/issues")
        .then(res => {
          console.log("res", res);
          setIssues(res.data)
        })
        .catch(error => console.log(error));
    };
    getIssues();
  }, [setIssues]);


  useEffect(() => {
    const results = 
      issues.filter(stat => { 
        return (
      stat.issue_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stat.issue_location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stat.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stat.priority.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stat.imgurl.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stat.issue_details.toLowerCase().includes(searchTerm.toLowerCase())
    )})
    setSearchResults(results)
  }, [searchTerm, issues])

  return (
    <div className="search-form">
      <section className="header">
        <form className="search-bar">
          <input 
            id="title"
            type="text"
            name="textfield"
            placeholder="Search"
            onChange={handleChange}
            value={searchTerm}
          />
          <button>Submit</button>
        </form>
      </section>
      {searchTerm.length === 0 ? ( 
      <div className="issue-list">
        {issues.map((issue, index) => {
          return (
            <div key={index}>
              <Issue
                issue_name={issue.issue_name}
                issue_location={issue.issue_location}
                category={issue.category}
                priority={issue.priority}
                imgurl={issue.imgurl}
                issue_details={issue.issue_details}
                key={issue.id}
              />
            </div>
          );
        })}
        </div>
      ) : ( 
      <div className="issue-list">
        {searchResults.map((issue, index) => {
          return (
            <div key={index}>
              <Issue
                issue_name={issue.issue_name}
                issue_location={issue.issue_location}
                category={issue.category}
                priority={issue.priority}
                imgurl={issue.imgurl}
                issue_details={issue.issue_details}
                key={issue.id}
              />
            </div>
          );
        })}
      </div>
      )}
    </div>
  )
}

export default IssueList;
