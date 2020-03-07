import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import styled from "styled-components";
// import UserSignup from './UserSignUp';
import axios from "axios";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  
`;
/*
Darker teal color: #3EBDC2
Powder blue: #C0EEF0
*/

const SignUp = props => (
  <div>
    <br />
    <br />
    <h1>Sign up form</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
        full_name: "",
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post(
            "https://bw-pt-co-make5.herokuapp.com/api/auth/register",
            values,
          )
          .then(res => {
            console.log(res);
            props.history.push("/");
            if (res.data) {
              alert("user account successfully registered");
            } else if (res.data) {
              alert("user account successfully registered");
            }
          })
          .catch(error => {
            console.log(error);
          });

        console.log(values);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <input
            type="full_name"
            name="full_name"
            placeholder="full_name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.full_name}
          />
          {errors.email && touched.email && errors.email}
          {errors.password && touched.password && errors.password}
          {errors.full_name && touched.full_name && errors.full_name}
          {/* <Link to="/"> */}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          {/* </Link> */}
        </FormWrapper>
      )}
    </Formik>
    <br></br>
    <br></br>
    {/* <UserSignup /> */}
  </div>
);

export default SignUp;
