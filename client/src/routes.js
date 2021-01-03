import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {DataPage} from './pages/DataPage';
import {AboutPage} from './pages/AboutPage';
import {SettingsPage} from './pages/SettingsPage';
import {AuthPage} from './pages/AuthPage';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/data/:id'>
          <DataPage/>
        </Route>
        <Route path='/about' exact>
          <AboutPage/>
        </Route>
        <Route path='/settings' exact>
          <SettingsPage/>
        </Route>
        <Redirect to='/about'/>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/' exact>
        <AuthPage/>
      </Route>
      <Redirect to='/'/>
    </Switch>
  )
};
