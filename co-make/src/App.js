import React from "react";
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
  );
}

export default App;
