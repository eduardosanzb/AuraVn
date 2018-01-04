import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Menu = props => {
  console.log(props);
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dress-type">Dress 1</Link>
      </li>
      <li>
        <Link to="/dress-finish">Dress 2</Link>
      </li>
      <li>
        <Link to="/face">Type of Face</Link>
      </li>
      <li>
        <Link to="/hair">Hair style</Link>
      </li>
      <li>
        <Link to="/results">Results</Link>
      </li>
    </ul>
  );
};
export default Menu;
