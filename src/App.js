import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/Bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App

//Task List:
//1. Render BubblePage as a PrivateRoute