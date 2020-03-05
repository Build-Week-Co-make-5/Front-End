// Stage 2 - Consuming the API
// Step 2 - In `IssueList.js`, complete the `saveEdit` and `deleteColor` functions to make AJAX requests to the API to edit/delete data

// HTTP/Axios Stretch Problems
// Build a form at the bottom of `IssueList.js` to add new colors to the colors data
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialIssue = {
  issue: "",
  code: { hex: "" },
};

const DeleteIssues = ({ issues, updateIssues }) => {
  console.log(issues);
  const [editing, setEditing] = useState(false);
  const [issueToEdit, setIssueToEdit] = useState(initialIssue);
  const [sparkly, setSparkly] = useState(initialIssue);
  const history = useHistory();

  const editIssue = issue => {
    setEditing(true);
    setIssueToEdit(issue);
    console.log(issue);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
      .put(`/issues/${issueToEdit.id}`, issueToEdit)
      .then(res => {
        setIssueToEdit(initialIssue);
        window.location.reload(false);
      })
      .catch(error => {
        console.log("API Data Not Pulling In", error);
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
      .post("/issues", sparkly)
      .then(res => {
        setSparkly(initialIssue);
        window.location.reload(false);
      })
      .catch(err => console.log("No bubbles, sorry", err));
  };

  const handleDelete = () => {
    return localStorage.removeItem("token"), history.push("/");
  };

  return (
    <div>
      <button onClick={handleDelete}>Log Out</button>
      <div className="colors-wrap">
        <p>colors</p>
        <ul>
          {colors.map(color => (
            <li key={color.color} onClick={() => editColor(color)}>
              <span>
                <span
                  className="delete"
                  onClick={e => {
                    e.stopPropagation();
                    deleteColor(color);
                  }}>
                  x
                </span>{" "}
                {color.color}
              </span>
              <div
                className="color-box"
                style={{ backgroundColor: color.code.hex }}
              />
            </li>
          ))}
        </ul>
        {editing && (
          <form onSubmit={saveEdit}>
            <legend>edit color</legend>
            <label>
              color name:
              <input
                onChange={e =>
                  setColorToEdit({ ...colorToEdit, color: e.target.value })
                }
                value={colorToEdit.color}
              />
            </label>
            <label>
              hex code:
              <input
                onChange={e =>
                  setColorToEdit({
                    ...colorToEdit,
                    code: { hex: e.target.value },
                  })
                }
                value={colorToEdit.code.hex}
              />
            </label>
            <div className="button-row">
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
        )}
      </div>
      {/* stretch - build another form here to add a color */}
      <form onSubmit={addBubble}>
        <legen>Add Bubble</legen>
        <label>
          Color Name:
          <input
            onChange={e =>
              setSparkly({
                ...sparkly,
                color: e.target.value,
              })
            }
            value={sparkly.color}
          />
        </label>
        <label>
          Hex Code:
          <input
            type="color"
            onChange={e =>
              setSparkly({
                ...sparkly,
                code: { hex: e.target.value },
              })
            }
            value={sparkly.code.hex}
          />
        </label>
        <div className="button-row">
          <button type="submit">Add Bubble</button>
        </div>
      </form>
    </div>
  );
};

export default ColorList;
