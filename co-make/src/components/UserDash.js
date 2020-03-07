import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import GetIssues from "../issues/GetIssues";
import styled from "styled-components";

const C = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: inherit;
  width: 50%;
  margin: auto;
  padding: 5px;
  border: 5px solid black;
`;

const Back = styled.div`
  margin: auto;
`;

const UserDash = props => {

  const [issues, setIssues] = useState([])
  //implement a search functionality
  useEffect(() => {
    axiosWithAuth()
      .get("/api/category", issues)
      .then(res => {
        console.log(res);
        setIssues(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [issues, setIssues]);

  return (
    <Back>
      <div>
        <h1>User</h1>
        <div className="user">
          {" "}
          Welcome back {localStorage.getItem("userId")}
        </div>
        <h2>My categories: </h2>
        <C>
          {issues.map(issues => (
            <div key={issues.id}>
              <br />
              <h4>
                Issues: <p>{issues.name}</p>
              </h4>
              <h5>
                Description: <p>{issues.description}</p>
              </h5>
            </div>
          ))}
        </C>
        <GetIssues />
      </div>
    </Back>
  );
}

export default UserDash;
