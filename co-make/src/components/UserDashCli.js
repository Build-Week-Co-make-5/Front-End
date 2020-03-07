import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import Search from "./Search";

const UserCli = styled.div`
  background: #3ebdc2;
`;
const Client = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;
  margin: auto;
  border: 3px solid black;
`;

const UserDashCli = props => {
  const [issues, setIssues] = useState([]);
  const [search, setSearch] = useState("");
  //implement a search functionality

  useEffect(() => {
    axiosWithAuth()
      .get("/api/issues", issues)
      // headers: {'authorization'}
      .then(res => {
        console.log(res);
        setIssues(res.data);
      })

      .catch(err => {
        console.log(err);
      });
  }, [issues]);

  const handleSearch = e => {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
    setIssues(
      issues.filter(issues =>
        issues.title.toLowerCase().includes(search.toLocaleLowerCase()),
      ),
    );
  };

  return (
    <UserCli>
      <div>
        <h1>Welcome back</h1>
        <h2>{localStorage.getItem("email")}</h2>
        <br />
        <Search handleSearch={handleSearch} search={search} />
        {issues.map(issues => (
          <div key={issues.id}>
            <br />
            <Client>
              <h4>
                Issues: <p>{issues.title}</p>
              </h4>
              <h4>
                User Id: <p>{issues.userId}</p>
              </h4>
              <h4>
                Category Id: <p>{issues.categoryId}</p>
              </h4>
            </Client>
          </div>
        ))}
      </div>
    </UserCli>
  );
};
export default UserDashCli;

/* {classes.map(classes => 
          <div key ={classes.id}>
              <br/>
              <Client>
              <h4>Workout: <p>{classes.title}</p></h4>          
              <h4>Instructor Id: <p>{classes.instructorId}</p></h4>          
              <h4>Category Id: <p>{classes.categoryId}</p></h4> */
