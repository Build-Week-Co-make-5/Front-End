import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

const Register = styled.div`
  width: 30vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: lightgrey;
  justify-content: space-evenly;
  align-items: center;
  height: 40vh;
`;

const RegistrationForm = ({ values, errors, touched, status }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log("status has changed!", status);
    status && setUserData(userData => [...userData, status]);
  }, [status]);

  return (
    <div className="register-form">
      <Register>
        <Form>
          <label>
            Full Name:
            <Field type="text" name="fullname" placeholder="fullname" />
          </label>
          {touched.fullname && errors.fullname && (
            <p className="errors">{errors.fullname}</p>
          )}
          <label>
            Username:
            <Field type="text" name="username" placeholder="username" />
          </label>
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}
          <label>
            Password:
            <Field type="password" name="password" placeholder="password" />
          </label>
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
          <label>
            Email:
            <Field type="text" name="email" placeholder="email" />
          </label>
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
          <label>
            City:
            <Field type="text" name="city" placeholder="city" />
          </label>
          {touched.city && errors.city && (
            <p className="errors">{errors.city}</p>
          )}
          <button type="submit">Register</button>
        </Form>
      </Register>
      
      {userData.map(user => {
        return (
          <ul key={user.id}>
            <li>Fullname: {user.fullname}</li>
            <li>Username: {user.username}</li>
            <li>Password: {user.password}</li>
            <li>Email: {user.email}</li>
            <li>City: {user.city}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ fullname, username, password, email, city }) {
    return {
      fullname: fullname || "",
      username: username || "",
      password: password || "",
      email: email || "",
      city: city || ""
    };
  },
  validationSchema: Yup.object().shape({
    fullname: Yup.string().required("Kindly insert your full name as per ID"),
    username: Yup.string().required("Please create a valid username"),
    password: Yup.string().required("Don't forget to create your password!"),
    email: Yup.string().required("Kindly include your email address"),
    city: Yup.string().required("Kindly let us know which city you reside in!")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting!", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(RegistrationForm);

export default FormikRegistrationForm;
