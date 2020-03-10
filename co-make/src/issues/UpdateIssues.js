/* Updating an Issue:
Add a route at the path /update-issue/:id
Create a component with a form to update the chosen issue
Add a button in the issue component that routes you to your new route with the issues's id as the URL param

1. The form should make a PUT request to the server when submitted
2. When the call comes back successfully, reset your form state and route the user to /issues where they will see the updated issue in the list
3. Pre-populate with all of the data - You usually need a PUT request to update a form
4. Click on update button
    - history.push to update form with :id of the item
    - update form will take in the item list as id
    - in the update form we find the item clicked from the list via the id param
    - populate the form with that item's data.

Tasks:
  - Add a Route for the UpdateForm component
  - in Item.js add a click handler for the update button
  - in the handler function navigate the user to the updateForm with the id of that item in the params.
*/
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import IssueContext from "../contexts/IssueContext";
import { Collapse } from "reactstrap";

const initialIssue = {
  issue_name: "",
  issue_location: "",
  category: "",
  priority: "",
  imgurl: "",
  issue_details: ""
};

const UpdateIssues = ({ id }) => {
  const { issue, setIssue } = useContext(IssueContext);
  const [update, setUpdate] = useState(initialIssue);
  const [newIssue, setNewIssue] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/issues")
      .then(res => {
        console.log(res);
        setUpdate(res.data.issue); 
        setNewIssue(res.data.issue);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

 // When the call comes back successfully, route the user to /issues where they will see the updated issue list without the deleted issue * /

 // MAKING A COPY OF THE ISSUE COMING BACK FROM BE, PUT REQUEST ONLY ONE ISSUE AND TRYING TO DIG OUT THAT ID SO THAT THE SYSTEM KNOWS WHICH ID TO ACCESS. MIGHT BE THE WORFLOW THAT'S CAUSING TO GET THE ID. 

 // HOW TO GET THE ACTUAL ISSUE ID - iss => iss.id === newIssue
 // If you are a string, be a number! parseInt()
  const fetchIssue = (issue) => {
    const issueArr = update.filter(iss => parseInt(iss.id) === parseInt(id))
    const [extractedIssue] = issueArr;
        setNewIssue(extractedIssue);
        toggle(id);
        console.log("FETCH ISSUE!", extractedIssue);
  };

  // Changing a string to numbers - just making sure that numbers are numbers
  const handleChange = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === 'priority') {
      value = parseInt(value, 10);
    } else {
      setNewIssue({...issue,
        [ev.target.name]: value
    });
    console.log("TARGET VALUE!", value)
    }
  };

  const handleSubmit = e => {
    // make a PUT request to edit an issue
    e.preventDefault()
    axiosWithAuth()
      .put(`/api/issues/${id}`, newIssue)
      .then(res => {
        console.log("RES FROM SERVER!", res)
        setNewIssue([...newIssue.filter(item => item.id !== id), res.data]);
        // res.data is the FULL array with updated issue - API - automatically 
        // That's not always the case. Sometimes you need to build your own updated array 
        // const newIssueArr = id.issues.map
      })
      .catch(err => console.log("That's an error!", err));
  };

  return (
    <div className="update">
        <button onClick={fetchIssue}>Update</button>
      <Collapse isOpen={isOpen}>
        <form onSubmit={handleSubmit} className="forms">
          <h2>Update an Issue</h2>
          <input
            type="text"
            name="issue_name"
            placeholder="issue_name"
            value={newIssue.issue_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="issue_location"
            placeholder="issue_location"
            value={newIssue.issue_location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="category"
            value={newIssue.category}
            onChange={handleChange}
          />
          <input
            type="text"
            name="priority"
            placeholder="priority"
            value={newIssue.priority}
            onChange={handleChange}
          />
          <input
            type="text"
            name="imgurl"
            placeholder="imgurl"
            value={newIssue.imgurl}
            onChange={handleChange}
          />
          <input
            type="text"
            name="issue_details"
            placeholder="issue_details"
            value={newIssue.issue_details}
            onChange={handleChange}
          />
          <button className="Button">Submit Updated Issue</button>
      </form>
      </Collapse>
    </div>
  );
};

export default UpdateIssues;
