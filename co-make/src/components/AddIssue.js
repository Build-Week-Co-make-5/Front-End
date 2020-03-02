import React, { useState, useEffect, useContext } from 'react';
import { IssueContext } from '../IssueContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddIssue = () => {

  const [issue_name, setIssueName] = useState('');
  const [issue_location, setIssueLocation] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  // const [imgURL, setImgURL] = useState('');
  // const [issue_details, setIssueDetails] = useState('');

  const [issues, setIssues] = useContext(IssueContext);

  const updateIssueName = (e) => {
    setIssueName(e.target.value);
  };

  const updateIssueLocation = e => {
    setIssueLocation(e.target.value);
  };

  const updateCategory = e => {
    setCategory(e.target.value);
  };

  const updatePriority = e => {
    setPriority(e.target.value);
  };

  // const updateImgURL = e => {
  //   setImgURL(e.target.value);
  // };

  // const updateIssueDetails = e => {
  //   setIssueDetails(e.target.value);
  // };

  const addIssue = e => {
    e.preventDefault();
    setIssues(prevIssues => [...prevIssues, { issue_name: issue_name, issue_location: issue_location, category: category, priority: priority }]);
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/api/issues")
      .then(res => {
        //res.data.data
        console.log("API INFO HERE", res);
        setIssues(res.data);
      })
      .catch(err => {
        console.log("API Data Not Pulling In", err);
      });
  }, []);

  return (
    <form onSubmit={addIssue}>
      <input
        type="text"
        issue_name="issue_name"
        value={issue_name}
        onChange={updateIssueName}
        placeholder="Add Title"
        key={issue_name.id}
      />
      <input
        type="text"
        issue_location="issue_location"
        value={issue_location}
        onChange={updateIssueLocation}
        placeholder="Add Title"
        key={issue_location.id}
      />
      <input
        type="text"
        category="category"
        value={category}
        onChange={updateCategory}
        placeholder="Add Category"
        key={category.id}
      />
      <input
        type="text"
        priority="priority"
        value={priority}
        onChange={updatePriority}
        placeholder="Add Priority"
        key={priority.id}
      />
      {/* <input
        type="url"
        imgURL="imgURL"
        value={imgURL}
        onChange={updateImgURL}
        placeholder="Add Image URL"
        key={imgURL.id}
      />
      <input
        type="text"
        issue_details="issue_details"
        value={issue_details}
        onChange={updateIssueDetails}
        placeholder="Add Issue Details"
        key={issue_details.id}
      /> */}
      <button>Submit</button>
    </form>
  );
}

export default AddIssue;