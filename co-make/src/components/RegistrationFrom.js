// Yen
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "./Style";

const RegistrationForm = ({ values, errors, touched, status }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log("status has changed!", status);
    status && setUserData(userData => [...userData, status]);
  }, [status]);

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
          type="password"
          name="password"
          placeholder="password"
          className="input"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
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
        <Field type="text" name="city" placeholder="city" className="input" />
        {touched.city && errors.city && <p className="errors">{errors.city}</p>}
        <label htmlFor="category">
          Category:
          <Field className="issue-select" as="select" name="category">
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
            checked={values.voting}
          />
          <span className="checkmark" />
        </label>
        <Button type="submit">Register</Button>
      </Form>

      {userData.map(user => {
        return (
          <ul key={user.id}>
            <li>Fullname: {user.fullname}</li>
            <li>Username: {user.username}</li>
            <li>Password: {user.password}</li>
            <li>Email: {user.email}</li>
            <li>City: {user.city}</li>
            <li>Category: {user.category}</li>
            <li>Voting: {user.voting}</li>
          </ul>
        );
      })}
    </div>
  );
};

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ fullname, username, password, email, city, voting }) {
    return {
      fullname: fullname || "",
      username: username || "",
      password: password || "",
      email: email || "",
      city: city || "",
      voting: voting || false
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
