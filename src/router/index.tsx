import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Login, LayoutContainer } from "../containers";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/shopkeeper">
        <LayoutContainer />
      </Route>
      <Redirect to={"/"}></Redirect>
    </Switch>
  </BrowserRouter>
);

export default Router;
