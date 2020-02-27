// Yen will work on the LoginForm component
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ values, errors, touched, status }) => {
  const [loginInfo, setLoginInfo] = useState([]);

  useEffect(() => {
    console.log("status has changed", status);
    status && setLoginInfo(loginInfo => [...loginInfo, status]);
  }, [status]);

  return (
    <div>
      <Form>
        <Field type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="password" />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <button type="submit">Login</button>
      </Form>

      {loginInfo.map(user => {
        return (
          <ul key={user.id}>
            <li>Username: {user.username}</li>
            <li>Password: {user.password}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please insert your username"),
    password: Yup.string().required("Please enter your password"),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users?page=2", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.reponse));
  },
})(LoginForm);

export default FormikLoginForm;
