import React, { useContext } from 'react';
import ReactDom from "react-dom";
import UserDetailsContext from "../../UserDetailsContext";
// import firebase from "./firebase";

import "../App.css";

import useFormValidation from '../../useFormValidation';
import validateAuth from "../../utils/validateAuth";

const INITIAL_STATE = {
  email: "",
  password: "",
  avatar: ""
}

const AccountInfo = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateAuth, authenticateUser);
  const [firebaseError, setFirebaseError] = React.useState(null);
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  async function authenticateUser() {
    const { email, password } = values;
    try {
      // await firebase.register(email, password);
    } catch (err) {
      console.error("Auth error", err);
      setFirebaseError(err.message);
    }
  }

  const UserProfile = () => {
  const {
    name,
    dateOfBirth,
    email,
    secretQuestion,
    secretAnswer,
    setUserDetails
  } = useContext(UserDetailsContext)

  return (
    <div className="container">
      <h1>Update Your Profile Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
          className={errors.email && "error-input"}
          autoComplete="off"
          placeholder="Update your email address"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className={errors.password && "error-input"}
          name="password"
          type="password"
          placeholder= "Update your password"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        {firebaseError && <p className="error-text">{firebaseError}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.avatar}
          className={errors.avatar && "error-input"}
          name="avatar"
          type="avatar"
          placeholder="Upload an image"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        {firebaseError && <p className="error-text">{firebaseError}</p>}
        <div>
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;