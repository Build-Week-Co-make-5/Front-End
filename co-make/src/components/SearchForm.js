import React, { useState, useEffect } from "react";
import Issue from "./Issue";

const SearchForm = ({ issues }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({ issues });

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

//   useEffect(() => {
//     const results = issues.filter(issue => {
//       return issue.title.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     setSearchResults(results);
//   }, [searchTerm, issues]);

  return (
    <div>
      <section className="search-form">
        <form>
            <input id="title" type="text" name="textfield" placeholder="Search" onChange={handleChange} value={searchTerm} />
        </form>
      </section>
      <div className="issue-list">
        {/* {searchResults.map(issue => {
            return <Issue title={issue.title} priority={issue.priority} />
        })} */}
      </div>
    </div>
  );
};

export default SearchForm;
