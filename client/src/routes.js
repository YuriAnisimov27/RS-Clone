import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DataPage from "./pages/DataPage/DataPage";
import GamePage from "./pages/GamePage/GamePage";
import SettingsPage from "./pages/SettingPage/SettingsPage";
import AuthPage from "./pages/AuthPage/AuthPage";

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/data/:id">
          <DataPage />
        </Route>
        <Route path="/game" exact>
          <GamePage />
        </Route>
        <Route path="/settings" exact>
          <SettingsPage />
        </Route>
        <Redirect to="/game" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default useRoutes;
