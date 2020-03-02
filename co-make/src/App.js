import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IssueProvider } from "./IssueContext";
import { LandingPage } from './components/LandingPage';

import RegistrationForm from "./components/RegistrationFrom";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import IssueList from './components/IssueList';
import AddIssue from "./components/AddIssue";
import About from "./components/About";
import Issue from "./components/Issue";
// import { IssueProvider } from './IssueContext';

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
            <Route
              path="/register"
              render={() => {
                return <RegistrationForm />;
              }}
            />
            <Route exact path="/login" component={LoginForm} />
            <Route path="/about" component={About} />
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
