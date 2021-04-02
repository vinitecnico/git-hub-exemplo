import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "../history";
import { Home, UserRepos } from "../pages";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/user/:username" component={UserRepos}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
