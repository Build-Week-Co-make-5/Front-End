// Yen will work on the LoginForm component
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "../Style";

const LoginForm = ({ values, errors, touched, status }) => {
  const [loginInfo, setLoginInfo] = useState([]);

  useEffect(() => {
    console.log("status has changed", status);
    status && setLoginInfo(loginInfo => [...loginInfo, status]);
  }, [status]);

  return (
    <div className="login-form">
      <Form className="login-format">
        <Field
          type="email"
          name="email"
          placeholder="example@example.com" /* changed placeholder from email */
          className="input"
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
      })} */} {/* dummy data to show submit form was working initially no longer needed */}
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please enter your email address"),
    password: Yup.string().required("Please enter your password"),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://bw-pt-co-make5.herokuapp.com/api/auth/login", values) /* changed post request from reqres.in to our backend link */
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.reponse));
  },
})(LoginForm);

// replaced LoginFrom with FormikLoginForm
export default FormikLoginForm;
