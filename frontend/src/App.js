import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { Members } from "./pages/Members";
import { FullMembers } from "./pages/FullMembers";
import { Teams } from "./pages/Teams";
import { Selection } from "./pages/Selection";
import CardDetail from "./Components/CardDetail";
import { TeamsSelection } from "./pages/TeamsSelection";

function App() {
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
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
            <Route path="/teamsselection">
              <TeamsSelection />
            </Route>
            <Route path="/selection">
              <Selection />
            </Route>
            <Route path="/fullmembers">
              <FullMembers />
            </Route>
            <Route path="/teamleaders">
              <Selection />
            </Route>
          </Switch>
        </div>
        <Route path="/teams/:id">
          <CardDetail />
        </Route> 
      </Dashboard>
    </Router>
  );
}

export default App;
