import React from 'react';
import { NavLink } from 'react-router-dom';
import * as style from './NavBar.module.scss';

export const NavBar = () => (
  <React.Fragment>
    <div className={style.navBarContainer}>
      <NavLink className={style.navItem} to="/home">Home</NavLink>
      <NavLink className={style.navItem} to="/about">About</NavLink>
    </div>
  </React.Fragment>
);
