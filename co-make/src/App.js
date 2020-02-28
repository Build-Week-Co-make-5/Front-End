import React from "react";
<<<<<<< HEAD
import "./App.css";
import { Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to our Co-Make React App!</h1> */}
      <Navbar />
      <Route exact path="/" component={LoginForm} />
      <Route path="/register" render={() => {
        return <RegistrationForm />
      }} />
    </div>
=======
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import RegistrationForm from "./components/RegistrationFrom";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import IssueList from './components/IssueList';
import AddIssue from "./components/AddIssue";
import { IssueProvider } from './IssueContext';

import "./App.css";

function App() {
  return (
    <Router>
      <IssueProvider>
        <div className="App">
          <Navbar />
          <IssueList />
          <AddIssue />
          <Route exact path="/" component={LoginForm} />
          <Route
            path="/register"
            render={() => {
              return <RegistrationForm />;
            }}
          />
        </div>
      </IssueProvider>
    </Router>
>>>>>>> 61b0dafabcc3d81bd9b8d526eadc88707dbe7d26
  );
}

export default App;
