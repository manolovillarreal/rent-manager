import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { BottonNav } from "../components/Dashboard/BottonNav";
import { DashboardScreen } from "../components/Dashboard/DashboardScreen";

export const AppRouter = () => {
  return (
    <div className="app__main">
      <div className="app__box-container">
        <Switch>
          <Route exact path="/" component={DashboardScreen} />
        </Switch>
        <BottonNav />
      </div>
    </div>
  );
};

