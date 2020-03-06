// useState - this hook allows us to use state in function components (the equivalent to this.state and this.setState in class components)
// useContext - this hook takes in a context object and returns whatever is passed in as a value prop in MyContext.Provider. 

import React, { useState, useEffect, useContext } from 'react';
import { IssueContext } from '../contexts/IssueContext';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { setNestedObjectValues } from 'formik';
import axios from "axios";

const AddIssue = props => {
  const [issues, setIssues] = useContext(IssueContext);

  const [issue_name, setIssueName] = useState('');
  const [issue_location, setIssueLocation] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [imgUrl, setImgUrl] = useState(''); // changed to imgUrl
  const [issue_details, setIssueDetails] = useState('');

  const handleChanges = event => {
    setIssues({ ...issues, [event.target.name]: event.target.value });
    console.log(event.target.name);
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewIssue(issues);
    setIssues(IssueContext) // to clear out inputs - re-updating our state to empty strings
  };

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

  const updateImgUrl = e => { // changed to imgUrl
    setImgUrl(e.target.value);
  };

  const updateIssueDetails = e => {
    setIssueDetails(e.target.value);
  };

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

  // const state = {
  //   selectedFile: null
  // }

  // Now it's stored in my state
  // const fileSelectedHandler = event => {
  //   setState({
  //     selectedFile: event.target.files[0]
  //   })
  // }
  
  // http request endpoint
  // const fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append('image', state.slectedFile, state.selectedFile.name);
  //   axios
  //     .post('URL/API ENDPOINT GOES HERE', fd) // Juan working on it for URL first
  //     .then(res => {
  //       console.log(res);
  //     });
      // .catch

  return (
    <>
      <div className="addIssue">
        {/* <input type="file" onChange={fileSelectedHandler} />
        <button onClick={fileUploadHandler}>Upload</button>
        {console.log("MY FILES!", fileSelectedHandler)} */}
      </div>
      <form onSubmit={addIssue}>
      {console.log("issuessssss",issues)}
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
          placeholder="Add Location"
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
        <input
          type="url"
          imgURL="imgURL"
          value={imgUrl} // changed to imgUrl
          onChange={updateImgUrl} // changed to imgUrl
          placeholder="Add Image URL"
          key={imgUrl.id} // changed to imgUrl
        />
        <input
          type="text"
          issue_details="issue_details"
          value={issue_details}
          onChange={updateIssueDetails}
          placeholder="Add Issue Details"
          key={issue_details.id}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddIssue;