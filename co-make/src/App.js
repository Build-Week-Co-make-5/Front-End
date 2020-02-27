import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationFrom";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import IssueList from './components/IssueList';

function App() {

  const [issues, setIssues] = useState([
    {
      title: "There is a pothole on my street",
      priority: "medium",
      id: 1,
    },
    {
      title: "There is a cat on top of the tree",
      priority: "low",
      id: 2,
    },
    {
      title: "A baby is missing",
      priority: "high",
      id: 3,
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <IssueList />
      <Route exact path="/" component={LoginForm} />
      <Route
        path="/register"
        render={() => {
          return <RegistrationForm />;
        }}
      />
    </div>
  );
}

export default App;
