import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import About from './About';
import Skill from './Skill';
import Like from './Like';
import Contact from './Contact'
import Footer from './Footer'
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";


const hist = createBrowserHistory(); 

ReactDOM.render(
  <Router history={hist}>
    <Header />
    <h2>Kana Harada</h2>
    <About />
    <Skill />
    <Like />
    <Contact />
    <Footer />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your Header, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();