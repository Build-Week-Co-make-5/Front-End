import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Button} from "../Style";

const RegistrationForm = ({ values, errors, touched, status }) => {
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    city: ""
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="register-form">
      <Form className="register-format">
        <Field
          type="text"
          name="fullname"
          placeholder="fullname"
          className="input"
        />
        {touched.fullname && errors.fullname && (
          <p className="errors">{errors.fullname}</p>
        )}
        <Field
          type="text"
          name="username"
          placeholder="username"
          className="input"
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        <Field
          type="email"
          name="email"
          placeholder="email"
          className="input"
        />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <Field
          type="password"
          name="password"
          placeholder="password"
          className="input"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <Field type="text" name="city" placeholder="city" className="input" />
        {touched.city && errors.city && <p className="errors">{errors.city}</p>}
        <Button type="submit">Register</Button>
      </Form>

      {/* {userData.map(user => {
        return (
          <ul key={user.id}>
            <li>Fullname: {user.fullname}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
            <li>City: {user.city}</li>
          </ul>
        );
      })} */}
    </div>
  );
};

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ fullname, username, password, email, city }) {
    return {
      fullname: fullname || "",
      username: username || "",
      email: email || "",
      password: password || "",
      city: city || "",
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
