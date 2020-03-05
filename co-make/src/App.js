import React, { useState, useEffect }from "react";

import AddIssue from "./components/AddIssue";
import Issue from "./components/Issue";
import axios from 'axios';
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import { Logout } from "./components/Logout";
import { 
  BrowserRouter as Router, 
  Route,
  withRouter,
  Switch,
  Redirect 
} from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import RegistrationForm from "./components/login/RegistrationForm";
import IssueList from "./components/IssueList";
import { IssueProvider } from "./contexts/IssueContext";
import { LandingPage } from "./components/LandingPage";
import Navbar from "./components/Navbar";
import CreateProfileForm from "./components/CreateProfileForm";
import About from "./components/About";
import EditIssues from "./components/EditIssues";

// state set up
function App() {
  const [ issues, setIssues ] = useState([]);

  const addNewIssue = issue => {
    const newIssue = {
    }
  }

  return (
    <Router>
      <IssueProvider>
        <div className="App">
          <Navbar />
          <Switch>
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
            <Route exact path="/editIssues" component={EditIssues} />
          </Switch>
        </div>
      </IssueProvider>
    </Router>
  );
}

export default App;
