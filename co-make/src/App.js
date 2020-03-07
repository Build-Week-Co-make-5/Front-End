import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IssueContext from "./contexts/IssueContext";
import login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import UserDash from "./components/UserDash";
import Navigation from "./components/Header";
import SignUp from "./components/Signup";
import GetIssues from "./issues/GetIssues";
import "./App.css";

// Darker teal color: #3EBDC2
// Powder blue: #C0EEF0

function App() {
  const [events, setEvents] = useState([]);

  return (
    <Router>
      <IssueContext.Provider value={{ events, setEvents }}>
        <div className="App">
          <Navigation />
          {/* <h1>Neighborhood Issues</h1> */}
          <Route exact path="/" component={login} />
          <Route path="/SignUp" component={SignUp} />
          <PrivateRoute exact path="/protected" component={UserDash} />
          <PrivateRoute exact path="/issues" component={GetIssues} />
        </div>
      </IssueContext.Provider>
    </Router>
  );
}

export default App;
