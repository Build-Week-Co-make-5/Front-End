import React from "react";
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
  );
}

export default App;
