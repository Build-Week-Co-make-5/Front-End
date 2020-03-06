import React, { useState, useEffect } from "react";
// import { withRouter, Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import {Button} from "../Style";

const RegistrationForm = ({ values, errors, touched, status }) => {
  const [userData, setUserData] = useState({
    full_name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://bw-pt-co-make5.herokuapp.com/api/auth/register", values) // changed from userData to values
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
          name="full_name"
          placeholder="full_name"
          className="input"
          // Formik already handles input values and onChange
          // onChange={handleChange}
          // value={userData.fullname}
        />
        {touched.full_name && errors.full_name && (
          <p className="errors">{errors.full_name}</p>
        )}
        <Field
          type="email"
          name="email"
          placeholder="email"
          className="input"
          // Formik already handles input values and onChange
          // onChange={handleChange}
          // value={userData.email}
        />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <Field
          type="password"
          name="password"
          placeholder="password"
          className="input"
          // Formik already handles input values and onChange
          // onChange={handleChange}
          // value={userData.password}
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <Field
          type="text"
          name="city"
          placeholder="city"
          className="input"
          // Formik already handles input values and onChange
          // onChange={handleChange}
          // value={userData.city}
        />
        {touched.city && errors.city && <p className="errors">{errors.city}</p>}
        <Button type="submit">Register</Button>
      </Form>

      {/* {userData.map(user => {
        return (
          <ul key={user.id}>
            <li>Fullname: {user.fullname}</li>
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
  mapPropsToValues({ full_name, password, email, city }) {
    return {
      full_name: full_name || "",
      email: email || "",
      password: password || "",
      city: city || "",
    };
  },
  validationSchema: Yup.object().shape({
    full_name: Yup.string().required("Kindly insert your full_name as per ID"), // fixed typo
    password: Yup.string().required("Don't forget to create your password!"),
    email: Yup.string().required("Kindly include your email address"),
    city: Yup.string().required("Kindly let us know which city you reside in!!")
  }),
})(RegistrationForm);

export default FormikRegistrationForm;