import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import {Button} from "../Style";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {useHistory} from "react-router-dom";

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

  let history = useHistory();

  const handleSubmit = values => {
    axiosWithAuth()
      .post("https://bw-pt-co-make5.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log("success", res);
        localStorage.setItem("token", res.data.token);
        history.push("/issue-list");
      })
      .catch(err => console.log("Oops, there's an error", err));
  }

  return (
    <div className="register-form">
      <Form className="register-format" onSubmit={handleSubmit}>
        <Field
          type="text"
          name="fullname"
          placeholder="fullname"
          className="input"
          onChange={handleChange}
          value={userData.fullname}
        />
        {touched.fullname && errors.fullname && (
          <p className="errors">{errors.fullname}</p>
        )}
        <Field
          type="text"
          name="username"
          placeholder="username"
          className="input"
          onChange={handleChange}
          value={userData.username}
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        <Field
          type="email"
          name="email"
          placeholder="email"
          className="input"
          onChange={handleChange}
          value={userData.email}
        />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <Field
          type="password"
          name="password"
          placeholder="password"
          className="input"
          onChange={handleChange}
          value={userData.password}
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <Field
          type="text"
          name="city"
          placeholder="city"
          className="input"
          onChange={handleChange}
          value={userData.city}
        />
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
      })} */} {/* dummy data to show submit form was working initially no longer needed */}
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
})(RegistrationForm);

export default FormikRegistrationForm;
