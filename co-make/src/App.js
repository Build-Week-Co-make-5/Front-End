import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import RegistrationForm from "./components/RegistrationFrom";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import IssueList from './components/IssueList';
import { IssueProvider } from './IssueContext';

import "./App.css";

function App() {
  return (
    <Router>
      <IssueProvider>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={LoginForm} />
          <Route
            path="/register"
            render={() => {
              return <RegistrationForm />;
            }}
          />
          <Route path="/main" render={() => {
            return <IssueList />
          }} />
        </div>
      </IssueProvider>
    </Router>
  );
}

export default App;
