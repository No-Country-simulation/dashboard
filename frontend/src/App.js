import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import { Home } from "./pages/Home";
import { Members } from "./pages/Members";
import { Teams } from "./pages/Teams";

function App() {
  return (
    <Router>
      <Dashboard>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/members">
              <Members />
            </Route>
            <Route path="/teams">
              <Teams />
            </Route>
          </Switch>
        </div>
      </Dashboard>
    </Router>
  );
}

export default App;
