import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import CM from "../images/CM.png";

const LoginBox = styled.div`
  margin: 30px 40px 0px 380px;
  justify-content: center;
  background: #3ebdc2;
  color: #c0eef0;
  width: 40%;
  height: 90vh;
  border: 1px solid black;
  border-radius: 3px;
`;
const StyleForm = styled.div`
  background: #c0eef0;
  margin: 0 auto;
  border-radius: 10%;
  padding: 20px;
  width: 50%;
`;

// Darker teal color: #3EBDC2
// Powder blue: #C0EEF0

const Login = props => {
  const [loginz, setLoginz] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setLoginz({
      ...loginz,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", loginz)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        //Means this will be student id of 1
        if (res.data.user) {
          props.history.push("/user");
          //will be instructor of id 2
        } else if (res.data.user) {
          props.history.push("/protected");
        }
      });
  };

  return (
    <>
      <LoginBox>
        <div>
          <br />
          <h1>Neighborhood Issues</h1>
          <h5>Login</h5>
          <img src={CM} alt="logo" />
          <br />
          <form onSubmit={handleSubmit}>
            <StyleForm>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={loginz.email}
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginz.password}
                onChange={handleChange}
              />
            </StyleForm>
            <br />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer>
          <h6>Copy Right 2020 CO-MAKE Neighborhood Issues</h6>
        </footer>
      </LoginBox>
    </>
  );
};

export default Login;
