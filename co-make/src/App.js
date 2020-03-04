import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IssueProvider } from "./contexts/IssueContext";
import { LandingPage } from "./components/LandingPage";

import Navbar from "./components/Navbar";
import RegistrationForm from "./components/login/RegistrationForm";
import LoginForm from "./components/login/LoginForm";
import CreateProfileForm from "./components/CreateProfileForm";
import About from "./components/About";
import IssueList from "./components/IssueList";
import Issue from "./components/Issue";
import AddIssue from "./components/AddIssue";

import "./App.css";

function App() {
  return (
    <Router>
      <IssueProvider>
        <div className="App">
          <Navbar />
          <Switch>
            {/* <h1>Protected React Router</h1> */}
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/" component={() => {
              window.location.href="URL to landing page";
              return null;
            }} /> */}
            <Route path="/register" component={RegistrationForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/profile" component={CreateProfileForm} />
            <Route path="/about" component={About} />
            {/* <Route path="/about" component={() => {
              window.location.href="URL to about page";
              return null;
            }} /> */}
            <Route exact path="/issue-list" component={IssueList} />
            <Route exact path="/issue" component={Issue} />
            <Route exact path="/addIssue" component={AddIssue} />
          </Switch>
          </div>
      </IssueProvider>
    </Router>
  );
}

export default App;
