import React from 'react';
import {Route} from 'react-router-dom';
import Menu from './Menu';
import './Header.css';



const Header = () => {
  return (
    <Route className="header">
      <header >
      <img className="headerlogo" src={`${process.env.PUBLIC_URL}/logo.png`} />
      <h1 className="header">KanaHarada</h1> 
      <Menu />
      </header>
    </Route>
  );
}

export default Header;
