import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { IssueProvider } from "./contexts/IssueContext";
import IssueList from "./components/IssueList";
import LoginForm from "./components/login/LoginForm";
import RegistrationForm from "./components/login/RegistrationForm";
import AddIssue from "./components/AddIssue";

import Issue from "./components/Issue";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import EditIssues from "./components/EditIssues";

import "./App.css";

function App() {
  return (
    <Router>
      <IssueProvider>
        <div className="App">
          <Navbar />
          <Switch>
            {/* Build a PrivateRoute component that will display IssueList when you're authenticated */}
            <PrivateRoute
              path="/protected"
              exact
              component={
                localStorage.getItem("token") ? IssueList : RegistrationForm
              }
            />
            <PrivateRoute
              path="/add"
              exact
              component={
                localStorage.getItem("token") ? AddIssue : RegistrationForm
              }
            />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
            {/* <Route
              exact
              path="/"
              render={() => 
                localStorage.getItem("token") ? <Redirect to="/issues" /><RegistrationForm />
              }
            /> */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            {/* <Route path="/issue" component={Issue} /> */} {/* Route changed to /protected/:id and moved to IssueList */}
            <Route path="/addIssue" component={AddIssue} />
            <Route path="/editIssues" component={EditIssues} />
          </Switch>
        </div>
      </IssueProvider>
    </Router>
  );
}

export default App;
