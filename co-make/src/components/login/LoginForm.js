// Yen will work on the LoginForm component
import React, { useState, useEffect, useReducer } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "../Style";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const LoginForm = ({ values, errors, touched, status }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setLoginInfo({
       ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://bw-pt-co-make5.herokuapp.com/api/auth/login", loginInfo)
      .then(res => {
        console.log("success", res);
        localStorage.setItem("token", res.data.token);
        history.push("/issue-list");
      })
      .catch(err => console.log("Oops, there's an error", err));
  };

  return (
    <div className="login-form">
      <Form className="login-format" onSubmit={handleSubmit}>
        <Field
          type="email"
          name="email"
          placeholder="example@example.com" /* changed placeholder from email */
          className="input"
          // Formik already handles input values and onChange
          // value={loginInfo.email}
          // onChange={handleChange}
        />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <Field
          id="password"
          type="password"
          name="password"
          placeholder="password"
          className="input"
          // Formik already handles input values and onChange
          // value={loginInfo.password}
          // onChange={handleChange}
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <Button type="submit">Login</Button>
      </Form>
      {/* {loginInfo.map(user => {
        return (
          <ul key={user.id}>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
          </ul>
        );
      })} */}{" "}
      {/* dummy data to show submit form was working initially no longer needed */}
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please enter your email address"),
    password: Yup.string().required("Please enter your password")
  })
})(LoginForm);

// replaced LoginForm with FormikLoginForm
export default FormikLoginForm;
