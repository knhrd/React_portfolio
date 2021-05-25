import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  return (
    <Route>
      <footer >
      <img className="footerlogo" src={`${process.env.PUBLIC_URL}/logo.png`} />
      <h1 className="footer">KanaHarada</h1> 
      </footer>
    </Route>
  );
}

export default Footer;