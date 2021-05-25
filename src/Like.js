import React from 'react';
import './Like.css';
import Cafe from './cafe';
import Cooking from './Cooking';
import Izakaya from './Izakaya';
import Live from './Live';

export default function Like() {

  return (
    <div className="like" id="like">
      <h3>Like</h3>
      <ul className="like">
        <li><Cafe /></li>
        <li><Cooking /></li>
        <li><Izakaya /></li>
        <li><Live /></li>
    </ul></div>
  );
}
