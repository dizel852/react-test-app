import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../Home/Home';
import { About } from '../About/About';

export const MainContent = () => (
  <React.Fragment>
    <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Redirect from='/' to='/home' />
      </Switch>
  </React.Fragment>
);
