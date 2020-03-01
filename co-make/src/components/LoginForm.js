// Yen will work on the LoginForm component
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "./Style";

const LoginForm = ({ values, errors, touched, status }) => {
  const [loginInfo, setLoginInfo] = useState([]);
  const [isLoggingIn, setLoggingIn] = useState(true);

  useEffect(() => {
    console.log("status has changed", status);
    status && setLoginInfo(loginInfo => [...loginInfo, status]);
  }, [status]);

  return (
    <div className="login-form">
      <Form className="login-format">
        <Field
          id="username"
          type="text"
          name="username"
          placeholder="username"
          className="input"
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
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
        <label htmlFor="category">
          Choose a Category
          <Field 
            className="issue-select" 
            as="select" 
            name="category">
            <option disabled>Choose an option</option>
            <option value="neighbor">Neighbor</option>
            <option value="board-member">Board Member</option>
            <option value="parent">Parent</option>
            <option value="police">Police</option>
            <option value="witness">Witness</option>
            <option value="mayor">Mayor</option>
            <option value="social-worker">Social Worker</option>
          </Field>
        </label>
        <label htmlFor="voting" className="checkbox-container">
          Voting
          <Field
            id="voting"
            type="checkbox"
            name="voting"
            check={values.voting}
          />
          <span className="checkmark" />
        </label>
        <Field
          as="textarea"
          type="text"
          name="notes"
          placeholder="Notes"
          className="input"
        />
        <Button type="submit">Login</Button>
      </Form>

      {loginInfo.map(user => {
        return (
          <ul key={user.id}>
            <li>Username: {user.username}</li>
            <li>Password: {user.password}</li>
            <li>Category: {user.category}</li>
            <li>Voting: {user.voting}</li>
            <li>Notes: {user.notes}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ 
    username, 
    password, 
    vote, 
    notes 
  }) {
    return {
      username: username || "",
      password: password || "",
      vote: vote || false, 
      notes: ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please insert your username"),
    password: Yup.string().required("Please enter your password"),
    vote: Yup.string().required("Please check if you are going to vote or not"),
    notes: Yup.string().required("Please add a note")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.reponse));
  }
})(LoginForm);

// replaced LoginFrom with FormikLoginForm
export default FormikLoginForm;

