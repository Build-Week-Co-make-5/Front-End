// Consuming the API
// Add the saveEdit and deleteIssue functions to make AJAX request to the API to edit/delete data
import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { IssueContext } from '../IssueContext';

const initialIssue = {
  issue_name: '',
  issue_location: '',
  category: '',
  priority: '',
  imgURL: '',
  issue_details: ''
};

const EditIssues = ({ issue, updateIssues }) => {
  console.log(issue);
  const [issues, setIssues] = useContext(IssueContext);
  const [editing, setEditing] = useState(false);
  const [issueToEdit, setIssueToEdit] = useState(initialIssue);
  const [sparkly, setSparkly] = useState(initialIssue);
  const history = useHistory()

  const editIssue = issue => {
    setEditing(true);
    setIssueToEdit(issue);
    console.log(issue);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a PUT request to save my updated issue
    // Where will I get the ID from? 
    // Where is it saved right now?
    axiosWithAuth()
      .put(`/issues/${issueToEdit.id}`, issueToEdit)
      .then(res => {
        setIssueToEdit(initialIssue)
        window.location.reload(false)
      })
      .catch(error => {
        console.log('API Data Not Pulling In', error);
      });
  };

  const deleteIssue = issue => {
    // make a delete request to delete this issue
    axiosWithAuth()
      .delete(`/issues/${issue.id}`)
      .then(res => {
        console.log(res);
        window.location.reload(false);
      })
      .catch(err => console.log(err));
  };

  const addIssue = e => {
    e.preventDefault();
    setSparkly({ ...sparkly });
    axiosWithAuth()
      .post('/issues', sparkly)
      .then(res => {
        setSparkly(initialIssue);
        window.location.reload(false);
      })
      .catch(err => console.log('No issues added, sorry', err));
  };

  const handleDelete = () => {
    return (
      localStorage.removeItem('token'),
      history.push('/')
    )
  }

  return (
    <div>
      <button onClick={handleDelete}>Log Out</button>
      <div className="issues-wrap">
        <p>issues</p>
        <ul>
          {issues.map(issue => (
            <li key={issue.issue} onClick={() => editIssue(issue)}>
              <span>
                <span className="delete" onClick={e => {
                  e.stopPropagation();
                  deleteIssue(issue)
                  }
                }>
                  x
                </span>{" "}
                {issue.issue}
              </span>
              <div 
                className="issue-box"
              />
            </li>
          ))}
        </ul>
        {editing && (
          <form onSubmit={saveEdit}>
            <legend>edit issue</legend>
            <label>
              issue name:
              <input 
                onChange={e =>
                  setIssueToEdit({ ...issueToEdit, issue: e.target.value })
                }
                value={issueToEdit.issue}
              />
            </label>
            <label>
              previous issue:
              <input 
                onChange={e => 
                  setIssueToEdit({
                    ...issueToEdit,
                    issue: { previous: e.target.value }
                  })
                }
                value={issues.previous.issue}
              />
              <div className="button-row">
                <button type="submit">save</button>
                <button onClick={() => setEditing(false)}>cancel</button>
              </div>
              </label>
            </form>
            )}
            </div>
            <form onSubmit={addIssue}>
              <legend>Add Issue</legend>
              <label>
                Issue Name:
                <input
                  onChange={e =>
                    setSparkly({
                      ...sparkly, 
                      issue: e.target.value 
                    })
                  }
                  value={sparkly.issue}
                />
              </label>
              {/* <label>
                New Issue:
                <input
                  type="issue"
                  onChange={e =>
                    setSparkly({
                      ...issueToEdit,
                      issue: { new: e.target.value }
                    })}
                  value={sparkly.issues.new}
                />
              </label> */}
              <div className="button-row">
                <button type="submit">Add Issue</button>
              </div>
          </form>
      </div>
  );
};

export default EditIssues;
