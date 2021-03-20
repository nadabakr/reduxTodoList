import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import HomePage from "./pages/home/homePage";

function routes() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/home" render={(props) => <HomePage {...props} />} />
        //...
        <Redirect from="/" exact to="/home" />
      </Switch>{" "}
    </HashRouter>
  );
}

export default routes;
