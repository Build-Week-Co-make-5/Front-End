import React, { useState, useEffect } from "react";
import Issue from "./Issue";
import { Link } from "react-router-dom"; // moved from IssueList

const SearchForm = ({ issues }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(issues);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = issues.filter(issue => {
      return issue.issue_name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm, issues]);

  return (
    // console.log("searchResults", searchResults),
    // console.log("searchTerm", searchTerm),
    <div className="search-form">
      <section className="header">
        <Link className="search-link" to="/addIssue">
          <button>Add Issue</button>
        </Link>
        {/* inverted button & link order for better functionality */}
        <form className="search-bar">
          <input
            id="title"
            type="text"
            name="textfield"
            placeholder="Search"
            onChange={handleChange}
            value={searchTerm}
          />
          {/* <button>Submit</button> */}
        </form>
      </section>
      <div className="issue-list">
        {searchResults.map(issue => {
          console.log("issue-id", issue.id);
          return (
            <div>
              <Issue
                issue_name={issue.issue_name}
                issue_location={issue.issue_location}
                category={issue.category}
                priority={issue.priority}
                imgURL={issue.imgURL}
                issue_details={issue.issue_details}
                key={issue.id}
              />
            </div>
          );
        })}
        {/* new Search (
          Array
            .from(searchResults)
            .sort((a,b) => {
              return a.id - b.id;
            })
        ) */}
      </div>
    </div>
  );
};

export default SearchForm;
