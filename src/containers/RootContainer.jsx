import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import { MainContent } from '../components/MainContent/MainContent';

export const RootContainer = () => (
  <React.Fragment>
    <Router>
      <NavBar />
      <MainContent />>
    </Router>
  </React.Fragment>
);
